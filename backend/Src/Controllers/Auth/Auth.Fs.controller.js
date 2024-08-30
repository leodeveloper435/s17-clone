import fs from 'fs';
import path from 'path';
import bcrypt from 'bcrypt'; // Asumimos que estás usando bcrypt para el hashing de contraseñas

const filePath = path.join(process.cwd(), 'usuarios.json');

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
}

export async function LoginFsController(req, res) {
    try {
        const { email, password } = req.body;

      
        const data = fs.readFileSync(filePath, 'utf8');
        const users = JSON.parse(data);

       
        const user = users.find(u => u.email === email);

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid password' });
        }

        
        res.status(200).json({ success: true, message: 'Login successful', user });
    } catch (error) {
        console.error("Error in LoginFsController:", error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
}

export async function RegisterFsController(req, res) {
    try {
        const { email, firstName, lastName, password, role } = req.body;

        
        const data = fs.readFileSync(filePath, 'utf8');
        const users = JSON.parse(data);

        
        const userExists = users.some(u => u.email === email);

        if (userExists) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        
        const hashedPassword = await bcrypt.hash(password, 10);

       
        const newUser = {
            email,
            firstName,
            lastName,
            password: hashedPassword,
            role: role || 'User',  
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        
        users.push(newUser);

        
        fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

        res.status(201).json({ success: true, message: 'User registered successfully', newUser });
    } catch (error) {
        console.error("Error in RegisterFsController:", error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
}
