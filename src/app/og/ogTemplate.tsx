import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'WEBMEKA - Creative Design Agency. Web Design, Web Development, Branding, Digital Marketing in Nairobi, Kenya.';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export function generateOgImage(title: string) {
    const pageTitle = title.toUpperCase();
    const welcomeLine = `---> Welcome to our ${pageTitle} page <---`;

    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(18deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: '"Inter", sans-serif',
                    padding: '60px',
                }}
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '24px',
                }}>
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        backgroundColor: '#000000', 
                        padding: '24px', 
                        borderRadius: '24px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                        marginBottom: '10px'
                    }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 250 250"
                            width="90"
                            height="90"
                            role="img"
                            aria-label="WEBMEKA logo"
                        >
                            <mask id="a">
                                <path fill="#fff" d="M0 0h250v250H0V0z" />
                                <path stroke="#000" strokeLinecap="round" strokeWidth="18" d="M70 70l110 110" />
                            </mask>
                            <g
                                fill="none"
                                stroke="#0ff"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="18"
                                mask="url(#a)"
                            >
                                <path d="M125 31.25l-19.79 60.63a20.85 20.85 0 0 1-13.28 13.28L31.25 125l60.63 19.79a20.85 20.85 0 0 1 13.28 13.28L125 218.75l19.79-60.63a20.85 20.85 0 0 1 13.28-13.28L218.75 125l-60.63-19.79a20.85 20.85 0 0 1-13.28-13.28z" />
                            </g>
                        </svg>
                    </div>

                    <div
                        style={{
                            fontSize: '84px',
                            fontWeight: '900',
                            color: '#ffffff',
                            letterSpacing: '-1px',
                            textAlign: 'center',
                            textShadow: '0 4px 20px rgba(0, 212, 255, 0.4)',
                        }}
                    >
                        WEBMEKA
                    </div>

                    <div
                        style={{
                            fontSize: '28px',
                            color: '#00FFFF',
                            textAlign: 'center',
                            fontWeight: '600',
                            letterSpacing: '8px', // Premium, airy tracking
                            textTransform: 'uppercase',
                        }}
                    >
                        Creative Design Studio
                    </div>
                </div>

                <div
                    style={{
                        marginTop: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(0, 212, 255, 0.3)',
                        padding: '16px 48px',
                        borderRadius: '50px',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <div
                        style={{
                            fontSize: '24px',
                            color: 'white',
                            fontWeight: '500',
                            letterSpacing: '3px',
                        }}
                    >
                        {welcomeLine}
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
