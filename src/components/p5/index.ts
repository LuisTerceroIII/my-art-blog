import dynamic from 'next/dynamic';

export const BackgroundFlowFragtal = dynamic(() => import('@/components/p5/background-flow-fragtal').then(mod => mod.BackgroundFlowFragtal as any), {ssr: false })

export const FlowFragtal = dynamic(() => import("@/components/p5/flow-fragtal").then(mod => mod.FlowFragtal as any), {ssr: false})

export const Fragtal = dynamic(() => import("@/components/p5/fragtal").then(mod => mod.Fragtal as any), {ssr: false})

export const Tornado = dynamic(() => import("@/components/p5/tornado").then(mod => mod.Tornado as any), {ssr: false})

export const VirtualityEvolution = dynamic(() => import("@/components/p5/virtuality-evolution").then(mod => mod.VirtualityEvolution as any), {ssr: false})