import './ServerIpComponent.css';
import {SERVER_IP} from "../../../../common/constants.js";

export function ServerIpComponent() {
    return (
        <div className="text-center mb-4">
            <div className="server-ip" id="server-ip">
                <span>IP сервера: </span>
                <strong id="ip-address">{SERVER_IP}</strong>
                <button className="btn btn-link" onClick={copyToClipboard}>
                    <i className="fas fa-copy"></i> Копировать
                </button>
            </div>
        </div>
    )
}

const copyToClipboard = () => {
    const ipAddress = document.getElementById("ip-address").innerText;
    navigator.clipboard.writeText(ipAddress).then(() => {
        alert('IP сервера скопирован!');
    }).catch(() => {
        alert('Не удалось скопировать IP. Попробуйте еще раз.');
    });
};