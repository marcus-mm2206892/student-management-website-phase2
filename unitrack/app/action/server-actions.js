'use server'

import unitrackRepo from "@/repos/unitrack-repo"

export async function getCoursesAction() {
    return await unitrackRepo.getCourses();
}