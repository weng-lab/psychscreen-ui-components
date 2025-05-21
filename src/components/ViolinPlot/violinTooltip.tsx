import { Tooltip } from "@visx/tooltip";
import { TooltipProps } from "./types";

const ViolinTooltip = ({ left, top, data, open }: TooltipProps) => {
    if (!open || !data) return null;

    return (
        <Tooltip left={left + 10} top={top}>
            {Object.entries(data).map(([key, value]) => {
                const formattedKey = key
                    .replace(/([a-z])([A-Z])/g, "$1 $2") // insert space before capital letters
                    .replace(/^./, str => str.toUpperCase()); // capitalize first letter
                if (key === "outlier") {
                    return (
                        <div key={key}>
                            <strong>{formattedKey}</strong>
                        </div>
                    );
                } else {
                    return (
                        <div key={key}>
                            <strong>{formattedKey}: </strong>
                            {typeof value === 'string'
                                ? (value.length > 45
                                    ? `${value.replace(/_/g, " ").slice(0, 45)}...`
                                    : value.replace(/_/g, " "))
                                : String(value)}
                        </div>
                    )
                }
            })}
        </Tooltip>
    );
};

export default ViolinTooltip;
