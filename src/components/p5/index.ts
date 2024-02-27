import dynamic from 'next/dynamic';

export const BackgroundFlowFragtal = dynamic(() => import('@/components/p5/background-flow-fragtal').then(mod => mod.BackgroundFlowFragtal as any), {ssr: false })

export const FlowFragtal = dynamic(() => import("@/components/p5/flow-fragtal").then(mod => mod.FlowFragtal as any), {ssr: false})