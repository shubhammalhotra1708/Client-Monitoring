'use server'
import axios from 'axios'
import { revalidatePath } from "next/cache";
import { z } from "zod";

const token = '6fa8a230018800e52874471696d46eac6e115c85';

axios.defaults.headers.common = {
  'Authorization': `Bearer ${token}`
};
export async function addForm(prevState,formData,) {
    const schema = z.object({
      labName: z.string().min(1),
      clientName: z.string().min(1),
      clientHostName: z.string().min(1),
      hostPort: z.string().min(1),
      adminUsername: z.string().min(1),
      adminPassword: z.string().min(1),
    });
    const parse = schema.safeParse({
      labName: formData.get('labName'),
      clientName: formData.get("clientName"),
      clientHostName: formData.get("clientHostName"),
      hostPort: formData.get("hostPort"),
      adminUsername: formData.get("adminUsername"),
      adminPassword: formData.get("adminPassword"),
    });
    // console.log(parse.error);
    if (!parse.success) {
      return { message: "Failed to get user data" };
    }
  
    const data = parse.data;
    console.log(data.labName);
    console.log(data.clientName);
    try {
    //   await sql`
    //     INSERT INTO todos (text)
    //     VALUES (${data.todo})
    //   `;
  
      revalidatePath("/");
      return { message: `Added user details db ${data.clientHostName}` };
    } catch (e) {
      return { message: "Failed to add user data db" };
    }
  }