import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Heading from '@theme/Heading'
import m1 from '/mini-posts/2024/1.json'
import { Card, Flex, View, Text } from '@aws-amplify/ui-react'

type MiniPost = {
    subject: string
    date: string
    images: URL[]
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext()
    const posts: MiniPost[] = []
    posts.push(m1)
    return (
        <Layout title={`主页`} description='Description will go into a meta tag in <head />'>
            <main>
                <Flex direction={'row'} justifyContent={'center'} padding={'1rem'}>
                    {posts.map(post => (
                        <MiniPostPage {...post} />
                    ))}
                </Flex>
            </main>
        </Layout>
    )
}

const MiniPostPage = (miniPost: MiniPost) => {
    const date = new Date(miniPost.date)
    return (
        <div>
            <Flex direction={'column'} backgroundColor={'rgb(240, 241, 244)'} padding={'1rem'} width={'40rem'}>
                <Text variation='tertiary' fontSize={'0.8rem'}>{`${date.toLocaleTimeString()} - ${date.toLocaleDateString()}`}</Text>
                <Text>{miniPost.subject}</Text>
            </Flex>
        </div>
    )
}
