import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
} from '@react-email/components'
import * as React from 'react'

export const ResgistrationMailTemplete = ({
    name,
    teamName,
}: {
    name: string
    teamName?: string
}) => {
    return (
        <Html>
            <Head />
            <Preview>Thank you {name}</Preview>
            <Body style={main}>
                <Container>
                    <Section style={content}>
                        <Row>
                            <Img
                                style={image}
                                width={620}
                                src={`https://sk-my-first-bucket.s3.ap-south-1.amazonaws.com/hackolution/image_2_1+(1).png`}
                            />
                        </Row>

                        <Row style={{ ...boxInfos, paddingBottom: '0' }}>
                            <Column>
                                <Heading
                                    style={{
                                        fontSize: 32,
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                    }}
                                >
                                    Hi {name},
                                </Heading>
                                <Heading
                                    as="h2"
                                    style={{
                                        fontSize: 26,
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                    }}
                                >
                                    Thank you for Registering in
                                    HACK&#123;0&#125;LUTION
                                </Heading>

                                <Text style={paragraph}>
                                    <b>Team Name: </b>
                                    {teamName}
                                </Text>
                                <Text style={{ ...paragraph, marginTop: -5 }}>
                                    <b>Location: IEM/Ashram</b>
                                </Text>

                                <Text style={paragraph}>
                                    If you have any query, you can contact us at
                                    hackolution2024&#64;gmail.com or you can
                                    contact to 7001407545 for further
                                    information...
                                </Text>
                                <Text style={{ ...paragraph, marginTop: -5 }}>
                                    Team, HACK&#123;0&#125;LUTION.
                                </Text>
                            </Column>
                        </Row>
                    </Section>

                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 12,
                            color: 'rgb(0,0,0, 0.7)',
                        }}
                    >
                        © 2024 | HACK&#123;0&#125;LUTION, Institute of
                        Engineering & Management, Salt Lake, Street No. 27,
                        Kolkata - 700102
                    </Text>
                </Container>
            </Body>
        </Html>
    )
}

export default ResgistrationMailTemplete

const main = {
    backgroundColor: '#fff',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const paragraph = {
    fontSize: 16,
}

const logo = {
    padding: '30px 20px',
}

const containerButton = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
}

const button = {
    backgroundColor: '#e00707',
    borderRadius: 3,
    color: '#FFF',
    fontWeight: 'bold',
    border: '1px solid rgb(0,0,0, 0.1)',
    cursor: 'pointer',
    padding: '12px 30px',
}

const content = {
    border: '1px solid rgb(0,0,0, 0.1)',
    borderRadius: '3px',
    overflow: 'hidden',
}

const image = {
    maxWidth: '100%',
}

const boxInfos = {
    padding: '20px',
}

const containerImageFooter = {
    padding: '45px 0 0 0',
}
