import { Tooltip } from "@visx/tooltip";
import { TooltipProps } from "./types";

const ViolinTooltip = ({ mouseX, mouseY, data, open }: TooltipProps) => {
    if (!open || !data) return null;

    return (
        <Tooltip left={mouseX + 10} top={mouseY}>
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
