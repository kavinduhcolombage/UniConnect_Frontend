import { Box, Group, Stack } from "@mantine/core";

const logos = [
    '/google.png',
    '/google.png',
    '/google.png',
    '/google.png',
    '/google.png',
];

const Companies = () => {

    const repeatedLogos = [...logos, ...logos];
    return <div className="mt-20 pb-5">
        <div className="text-4xl text-center font-semibold mb-10">Trusted by <span className="text-blue-500">1000+</span> Companies</div>

        <Box
                w="100%" // Full width of the marquee container
                h={120} // Height of the marquee container
                pos="relative"
                style={{ overflow: "hidden", whiteSpace: "nowrap" }} // Ensure horizontal scrolling
            >
                <Box
                    style={{
                        display: "inline-block", // Ensure inline layout for horizontal scrolling
                        animation: "scroll-left 15s linear infinite", // Horizontal scrolling animation
                    }}
                >
                    {/* Render logos twice for seamless looping */}
                    {logos.concat(logos).map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            width={100}
                            height={100}
                            alt="logo"
                            style={{ display: "inline-block", marginRight: "24px" }}
                        />
                    ))}
                </Box>

                <style>
                    {`
                        @keyframes scroll-left {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-100%); }
                        }
                    `}
                </style>
            </Box>
    </div>
}

export default Companies;
