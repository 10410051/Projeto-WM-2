import { NextResponse } from "next/server"
import cursosData from "@/data/cursos.json"

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const categoria = searchParams.get("categoria")

  const programas = cursosData.programas
  const filtrados = categoria
    ? programas.filter((p) => p.categoria === categoria)
    : programas

  return NextResponse.json(filtrados)
}
