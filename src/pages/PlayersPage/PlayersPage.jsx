import {FaSort, FaSortDown, FaSortUp} from "react-icons/fa";
import {useMemo, useState} from "react";
import {useGetAllStatsQuery} from "../../services/stats.js";
import {convertTicks, formatTimeShort} from "../../common/utils/ticksConverter.js";
import {OverlayTrigger, Tooltip} from "react-bootstrap";

export function PlayersPage() {
    const {data, error, isLoading, refetch} = useGetAllStatsQuery(undefined);

    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    let sortedData = useMemo(() => {
        let sortableData = data ? [...data] : [];
        if (sortConfig.key !== null) {
            sortableData.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableData;
    }, [data, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        } else if (sortConfig.key === key && sortConfig.direction === 'descending') {
            direction = null;
            key = null;
        }
        setSortConfig({ key, direction });
    };

    const getSortIcon = (name) => {
        if (sortConfig.key !== name) {
            return <FaSort />;
        }
        if (sortConfig.direction === 'ascending') {
            return <FaSortUp />;
        }
        if (sortConfig.direction === 'descending') {
            return <FaSortDown />;
        }
        return <FaSort />;
    };

    function createTh(field) {
        return (
            <th key={field[1]}>
                <button
                    type="button"
                    onClick={() => requestSort(field[1])}
                    className="btn btn-link text-light text-decoration-none"
                >
                    {field[0]} {getSortIcon(field[1])}
                </button>
            </th>
        )
    }

    return (
        <div className="table-responsive">
            <div className="d-flex justify-content-end">
                <button onClick={refetch} className="btn btn-link refresh-button d-flex align-items-center">
                    <i className="fas fa-sync-alt me-2"></i> Обновить
                </button>
            </div>
            <table className="table table-dark table-striped">
                <thead>
                <tr>
                    {[
                        ['', 'online'],
                        ['Имя', 'name'],
                        ['Время в игре', 'play_time'],
                        ['Блоков выкопано', 'blocks_mined'],
                        ['Вещей скрафчено', 'items_crafted'],
                        ['Мобов убито', 'mob_killed'],
                        ['Время без смертей', 'time_since_death'],
                        ['Время без отдыха', 'time_since_rest']
                    ].map(col => createTh(col))}
                </tr>
                </thead>
                <tbody>
                {sortedData.map((item) => {
                    return (<tr key={item.name}>
                        <td className="text-center">
                            {item.online ? <span className="badge rounded-pill bg-success">online</span> :
                                <span className="badge rounded-pill bg-secondary">offline</span>}
                        </td>
                        <td className="ps-4 text-light">
                        {item.name}
                        </td>
                        <td className="ps-4 text-light">
                            <OverlayTrigger
                                placement="top"
                                delay={{show: 500, hide: 0}}
                                overlay={<Tooltip id={`tooltip-${item.name}`}>{item.play_time} тиков</Tooltip>}
                            >
                                <span>{formatTimeShort(convertTicks(item.play_time))}</span>
                            </OverlayTrigger>
                        </td>
                        <td className="ps-4 text-light">{item.blocks_mined}</td>
                        <td className="ps-4 text-light">{item.items_crafted}</td>
                        <td className="ps-4 text-light">{item.mob_killed}</td>
                        <td className="ps-4 text-light">
                            <OverlayTrigger
                                placement="top"
                                delay={{show: 500, hide: 0}}
                                overlay={<Tooltip id={`tooltip-${item.name}`}>{item.time_since_death} тиков</Tooltip>}
                            >
                                <span>{formatTimeShort(convertTicks(item.time_since_death))}</span>
                            </OverlayTrigger>
                        </td>
                        <td className="ps-4 text-light">
                            <OverlayTrigger
                                placement="top"
                                delay={{show: 500, hide: 0}}
                                overlay={<Tooltip id={`tooltip-${item.name}`}>{item.time_since_rest} тиков</Tooltip>}
                            >
                                <span>{formatTimeShort(convertTicks(item.time_since_rest))}</span>
                            </OverlayTrigger>
                        </td>
                    </tr>)
                })}
                </tbody>
            </table>
        </div>
    );
}