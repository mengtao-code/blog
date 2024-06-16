import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Heading from '@theme/Heading'
import m1 from '/mini-posts/2024/1.json'
import m2 from '/mini-posts/2024/2.json'
import { Card, Flex, View, Text } from '@aws-amplify/ui-react'
import { ReactElement } from 'react'

type MiniPost = {
    subject: string
    date: string
    images: Image[]
    urls: Url[]
}

type Image = {
    image: URL
    description?: string
}

type Url = {
    url: URL
    description?: string
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext()
    const posts: MiniPost[] = []
    posts.push(m1)
    posts.push(m2)
    return (
        <Layout title={`主页`} description='Description will go into a meta tag in <head />'>
            <main>
                <Flex direction={'row'} justifyContent={'center'} padding={'1rem'}>
                    <Flex direction={'column'}>
                        {posts.map(post => (
                            <MiniPostPage {...post} />
                        ))}
                    </Flex>
                </Flex>
            </main>
        </Layout>
    )
}

const MiniPostPage = (miniPost: MiniPost) => {
    const date = new Date(miniPost.date)
    return (
        <div>
            <Flex direction={'column'} backgroundColor={'rgb(240, 241, 244)'} padding={'1rem'} width={'40rem'} borderRadius={10}>
                <Text variation='tertiary' fontSize={'0.8rem'}>{`${date.toLocaleTimeString()} - ${date.toLocaleDateString()}`}</Text>
                <Text>{miniPost.subject}</Text>
                {miniPost.urls?.map(url => (
                    <View>
                        <Conditional condition={url.description === null} element={<Text>{`${url.description}`}</Text>} />
                        <Text>{`${url.url}`}</Text>
                    </View>
                ))}
            </Flex>
        </div>
    )
}

const Conditional = ({ condition, element }: { condition: boolean; element: ReactElement }) => {
    if (condition) {
        return element
    } else {
        return <View />
    }
}
