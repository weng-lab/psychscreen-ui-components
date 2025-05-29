import { Tooltip } from "@visx/tooltip";
import { TooltipProps } from "./types";
import React from "react";

const ViolinTooltip = ({ left, top, data, open }: TooltipProps) => {
    if (!open || !data) return null;

    const isReactElement = (value: unknown): value is JSX.Element => {
        return React.isValidElement(value);
    };

    return (
        <Tooltip left={left + 10} top={top}>
            {isReactElement(data) ? (
                data
            ) : (
                Object.entries(data as Record<string, unknown>).map(([key, value]) => {
                    const formattedKey = key
                        .replace(/([a-z])([A-Z])/g, "$1 $2")
                        .replace(/^./, str => str.toUpperCase());

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
                        );
                    }
                })
            )}
        </Tooltip>
    );
};

export default ViolinTooltip;
