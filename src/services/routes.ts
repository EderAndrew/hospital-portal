export const routes = {
    authLogin: "/auth/login",
    myProfile: "/users/me",
    authRefresh: "/auth/refresh",
    findExams: "/specialties/allSpecialties",
    myExams: (id: string) => `/exams/myExams/${id}`,
    myAppointments: (id: string) => `/appointments/myAppointments/${id}`,
    createAppointment: "/appointments/create"
}