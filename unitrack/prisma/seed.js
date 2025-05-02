// npm i fs-extra
import fs from 'fs-extra'
import path from 'path'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const adminPath = path.join(process.cwd(), 'app/assets/data/admins.json')



async function seed() {
    console.log('Seeding Started...')
    const accounts = await fs.readJSON(accountPath);
    for (const account of accounts){
        await prisma.account.create({ data:account })
    }
}

try {
    await seed();
    console.log('Seeding finished')
} catch (e) {
    console.log("Seeding Failed");
    process.exit(1)
    
} finally {
    await prisma.$disconnect();
}

