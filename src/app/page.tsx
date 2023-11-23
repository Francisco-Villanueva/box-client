import { redirect } from 'next/navigation'
//TODO: Cuando tengamos bien configurada la persistencia deberíamos agregar una validación del estilo {!user ? redirect("/login")}
export default function HomePage() {
	return <main>{redirect('/login')}</main>
}
