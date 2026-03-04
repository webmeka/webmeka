import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'WEBMEKA - creative Design Agency. Web Design, Web Development, Branding, Digital Marketing in Nairobi, Kenya.';
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
                    gap: '20px',
                    padding: '40px',
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000', padding: '20px', borderRadius: '20px' }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 250 250"
                        width="100"
                        height="100"
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
                        fontSize: '72px',
                        fontWeight: 'bold',
                        color: '#00FFFF',
                        textAlign: 'center',
                        textShadow: '0 6px 0 #000000, 0 6px 0 #000000',
                    }}
                >
                    WEBMEKA
                </div>
                <div
                    style={{
                        fontSize: '48px',
                        color: 'white',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        maxWidth: '900px',
                        textShadow: '0 6px 0 #000000, 0 6px 0 #000000',
                    }}
                >
                    CREATIVE DESIGN STUDIO
                </div>
                <div
                    style={{
                        fontSize: '36px',
                        color: 'white',
                        textAlign: 'center',
                        maxWidth: '900px',
                    }}
                >
                    {welcomeLine}
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}