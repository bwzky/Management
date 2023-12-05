import http from "./http";

export const loginAPI=(data)=>http.post(http.addURL('/sys/login'),data)

export const roleAPI=(params)=>http.post(http.addURL('/sys/profile'),params)

export const departmentAPI=(params)=>http.get(http.addURL('/company/department'),{params})

export const companyAPI=(params)=>http.post(http.addURL('/company/department'),params)

export const departbianAPI=(params)=>http.put(http.addURL(`/company/department/${params.id}`),params)

export const chaxunAPI=(params)=>http.get(http.addURL(`/company/department/${params.id}`),params)

export const simpleAPI=()=>http.get(http.addURL('/sys/user/simple'))

export const deldepartmentAPI=(params)=>http.delete(http.addURL(`/company/department/${params.id}`))

// /sys/user/simple
