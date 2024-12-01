import {BLUEMAP_URL} from "../../common/constants.js";

export function MapPage() {
    return (
        <div>
            <div className="ratio ratio-16x9">
                <iframe
                    src={BLUEMAP_URL}
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}