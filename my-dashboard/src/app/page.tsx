import { redirect } from "next/navigation";
import Image from "next/image";

export default function HomePage() {
  // para redireccionar al counter a penas se renderice la app
  redirect('/dashboard/counter');
  
}
