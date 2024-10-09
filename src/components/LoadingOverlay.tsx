"use client"

// need to install react-spinners for this component to work
// with docker - must shut down, clear volumes, and rebuild / spinup all containers
import ClipLoader from 'react-spinners/ClipLoader';

// included this here and not in quotes.model.ts so that LoadingOverlay component is easily reusable in other apps
interface LoadingOverlayProps {
    show?:boolean;
    showSpinner?:boolean    
    spinnerColor?:string;
    bgColor?:string;
}

export default function LoadingOverlay({show = true, bgColor = "#000000", spinnerColor = "#545454", showSpinner = true}:LoadingOverlayProps) {
    return (
        (show)
        ? 
        <div className="inline-block" >
            {(showSpinner) ? 
            <ClipLoader 
                color={spinnerColor}
                size={40} />
            : <div></div>}
        </div>
        : <div></div>
    );
}