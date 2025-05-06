import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UniTrackRepo {

    async getCourses(){
        return await prisma.course.findMany({ include: { CourseMajorOfferings: true }});
    }

}

export default new UniTrackRepo();
