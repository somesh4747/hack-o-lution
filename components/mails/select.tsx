import * as React from 'react'
import { Html, Head, Img, Text } from '@react-email/components'

const SelctedTeamMailTemplate = ({ teamName }: { teamName: string }) => {
    const containerStyle: React.CSSProperties = {
        padding: '0px',
        backgroundColor: 'transparent',
    }

    const rowStyle: React.CSSProperties = {
        margin: '0 auto',
        minWidth: '320px',
        maxWidth: '700px',
        overflowWrap: 'break-word',
        wordWrap: 'break-word',
        wordBreak: 'break-word',
        backgroundColor: 'transparent',
    }

    const contentStyle: React.CSSProperties = {
        height: '100%',
        width: '100%',
        padding: '0px',
        borderTop: '0px solid transparent',
        borderLeft: '0px solid transparent',
        borderRight: '0px solid transparent',
        borderBottom: '0px solid transparent',
    }

    const textAlignCenter: React.CSSProperties = {
        textAlign: 'center',
        fontStyle: 'italic',
    }

    const headingStyle: React.CSSProperties = {
        margin: '0px',
        lineHeight: '140%',
        textAlign: 'center',
        wordWrap: 'break-word',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '39px',
        fontWeight: 700,
    }

    const subheadingStyle: React.CSSProperties = {
        margin: '0px',
        color: '#ffffff',
        lineHeight: '140%',
        textAlign: 'center',
        wordWrap: 'break-word',
        letterSpacing: '0px',
        fontSize: '17px',
        fontWeight: 400,
    }

    const footerStyle: React.CSSProperties = {
        fontSize: '14px',
        color: '#86868b',
        lineHeight: '170%',
        textAlign: 'center',
        wordWrap: 'break-word',
    }

    return (
        <Html>
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <link
                    href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
                    rel="stylesheet"
                />
            </Head>
            <body
                style={{
                    margin: 0,
                    padding: 0,
                    backgroundColor: '#000000',
                    color: '#ffffff',
                }}
            >
                <div style={containerStyle}>
                    <div style={rowStyle}>
                        <div style={contentStyle}>
                            <Img
                                src="https://assets.unlayer.com/projects/0/1729615130913-image_2_1%20(1).png"
                                alt="Congratulations"
                                style={{
                                    display: 'block',
                                    maxWidth: '680px',
                                    width: '100%',
                                }}
                            />
                            <Text style={textAlignCenter}>
                                🎉 Congratulations! 🎉
                            </Text>
                            <h1 style={headingStyle}>{teamName}</h1>
                            <h4 style={subheadingStyle}>
                                We are excited to inform you that your team has
                                been selected for the{' '}
                                <strong>HACK&#123;0&#125;LUTION</strong>. We
                                can&apos;t wait to have you join us on this exciting
                                journey of innovation and collaboration!
                            </h4>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        padding: '15px 15px 70px',
                        backgroundColor: 'transparent',
                    }}
                >
                    <div style={rowStyle}>
                        <div style={contentStyle}>
                            <Text style={textAlignCenter}>
                                <strong>Location:</strong> Institute of
                                Engineering and Management (IEM), Salt Lake,
                                Kolkata, Ashram
                            </Text>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        padding: '10px 10px 50px',
                        backgroundColor: '#1d1d1f',
                    }}
                >
                    <div style={rowStyle}>
                        <div style={contentStyle}>
                            <Text style={footerStyle}>
                                Email:{' '}
                                <strong>hackolution2024@gmail.com</strong>
                                <br />
                                <strong>Contact Details:</strong>
                                <br />
                                Somesh Karmakar: +91 7001407545
                                <br />
                                Souvik Ghosh: +91 9038509030
                                <br />
                                <br />
                                We look forward to seeing you at the event and
                                wish you the best of luck. Get ready for an
                                incredible experience—your creativity and skills
                                will shine!
                            </Text>
                        </div>
                    </div>
                </div>
            </body>
        </Html>
    )
}

export default SelctedTeamMailTemplate
