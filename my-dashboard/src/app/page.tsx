import { redirect } from "next/navigation";

export default function HomePage() {
  // para redireccionar al main a penas se renderice la app
  redirect('/dashboard/main');
  
}
