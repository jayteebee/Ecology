'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import PageIllustration from '@/components/page-illustration'
import Footer from '@/components/ui/footer'
import { LinkedInInsightTag } from 'nextjs-linkedin-insight-tag'
// import { GoogleTagManager } from "@next/third-parties/google"



export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <>
      <main className="grow">
    {/* <GoogleTagManager gtmId="GTM-TK53DNXC" /> */}

        <PageIllustration />

        {children}
    {/* <LinkedInInsightTag /> */}
      </main>

      {/* <Footer /> */}
    </>
  )
}

// AQV6n0afpOY6WDWvpO8b6ekvnhrjQ8TSP1evhGctdnxUWvU9BBPQSIaTnBSyatqnvJ6KA2mcxLabEZ7mewzf1sDvdScwgPBTyI2OVCx9gObv_oEPZGuZvlVccry932AFRqOXHXRpoexGbPvS2uYfHBFnuuTV7OslEKa064mWwVl4bd2EK2CI1XvbuEqAMaqFGiSG4tNsjL8cQstGcGURS1jC8yxEeoBvRF7Mgkaxnync_wIwLCQkDBS11tFsGssNp6BeVz_KoH91KIeH-uKMfBR1B-wnvNjev_1Ng7HYZcBkBBCLtwPJb1e49fXJmO4eQ5gqxjikP_ECQmMukypxTHwEpep9tgd6JcHUsioHyPpwvIKnTUppCE77QQ_fAv-ZwzVIZnr8c-6kDMtdgIrsoDbSRAhtmOSaGC6nT88UmKXNezhRpjJS-TFhlFOHbfZnKrGud8mc1uTWN0O5BWI