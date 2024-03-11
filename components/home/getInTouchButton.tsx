import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import arrow from "@/public/arrow.svg";


const GetInTouchButton = ( ) => {
  return (
    <Link
              href="https://cal.com/ahd-kabeerhadi/quick-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant={"outline"}
                className="w-full rounded-xl inline-flex h-12 bg-transparent hover:bg-slate-200/25 items-center justify-center px-6 font-mediumtransition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <Image
                  alt="get in touch icon"
                  src={arrow}
                  loading="lazy"
                  width={18}
                  height={18}
                  className="mr-2"
                />
                Get in touch
              </Button>
            </Link>
  )
}

export default GetInTouchButton