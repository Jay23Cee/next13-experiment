'use client'

import  { ReactNode } from 'react'
import {QueryClient, QueryClientProvider}from '@tanstack/react-query'

interface Props {
    children? : ReactNode
}

const queryClient = new QueryClient()


const QueryWrapper=({children}: Props)=> {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
        </QueryClientProvider>
  )
}


export default QueryWrapper