import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UniTrackRepo {

    async getCourses(){
        return await prisma.course.findMany({ include: { CourseMajorOfferings: true }});
    }

    async getStudents(){
        return await prisma.student.findMany();
    }

    async getStudent(id){
        return await prisma.student.findUnique({where: {studentId: parseInt(id)}});
    }

    async updateStudent(id, updatedData){
        return await prisma.student.update({data: updatedData, where: {studentId: parseInt(id)}});
    }
    
    async 
}

export default new UniTrackRepo();
