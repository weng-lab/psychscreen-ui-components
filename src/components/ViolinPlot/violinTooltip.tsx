import { Tooltip } from "@visx/tooltip";
import { TooltipProps } from "./types";

const ViolinTooltip = ({ left, top, data, open }: TooltipProps) => {
    if (!open || !data) return null;
    
    return (
        <Tooltip left={left + 10} top={top}>
            {Object.entries(data).map(([key, value]) => (
                <div key={key}>
                    <strong>{key.charAt(0).toUpperCase() + key.slice(1)}: </strong>
                    {typeof value === 'string'
                        ? (value.length > 45
                            ? `${value.replace(/_/g, " ").slice(0, 45)}...`
                            : value.replace(/_/g, " "))
                        : String(value)}
                </div>
            ))}
        </Tooltip>
    );
};

export default ViolinTooltip;
