import Icon from "@/components/IconProps"
export default function Header() {
  return (
      <header>
        <nav>
        <a href="#">
            <Icon name="home" width={32} height={32} />
        </a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
        </nav>
      </header>
  )
}
