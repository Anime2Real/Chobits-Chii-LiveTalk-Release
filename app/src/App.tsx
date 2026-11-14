import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Download from './sections/Download'
import InstallTips from './sections/InstallTips'
import Community from './sections/Community'
import Footer from './sections/Footer'
import ScallopEdge from './components/ScallopEdge'
import { LangProvider } from './i18n'

function Divider({ from, to }: { from: string; to: string }) {
  return (
    <div style={{ background: from }}>
      <ScallopEdge color={to} />
    </div>
  )
}

export default function App() {
  return (
    <LangProvider>
      <div className="min-h-screen">
        <Nav />
        <main>
          <Hero />
          <Divider from="var(--cream)" to="var(--blush)" />
          <Features />
          <Divider from="var(--blush)" to="var(--mint)" />
          <Download />
          <Divider from="var(--mint)" to="var(--peach)" />
          <InstallTips />
          <Divider from="var(--peach)" to="var(--sage)" />
          <Community />
          <Divider from="var(--sage)" to="var(--ink-deep)" />
        </main>
        <Footer />
      </div>
    </LangProvider>
  )
}
