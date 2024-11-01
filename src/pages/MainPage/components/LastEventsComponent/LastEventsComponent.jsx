import {useGetEventsQuery} from "../../../../services/events.js";

export function LastEventsComponent() {
    const {data, error, isLoading} = useGetEventsQuery(undefined, {
        pollingInterval: 30000,
        skipPollingIfUnfocused: true,
    })
    const events = data ? [...data].sort((a, b) => b.time - a.time) : [];
    return (
        <div className="text-center mb-4">
            <div className="card text-light">
                <div className="card-body">
                    {
                        isLoading ? (<>Загрузка последних событий</>) :
                            error ? (<>Возникла ошибка во время загрузки последних эвентов</>) : (
                                <>
                                    <h5 className="mb-3">Последние события</h5>
                                    <table className="table table-striped table-hover">
                                        <thead className="table-dark">
                                        <tr>
                                            <th scope="col">Время</th>
                                            <th scope="col">Игрок</th>
                                            <th scope="col">Событие</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        { events.map(event => <>
                                                <tr>
                                                    <td>{formatDate(event.time)}</td>
                                                    <td>{event.player}</td>
                                                    <td>{event.description}</td>
                                                </tr>
                                            </>
                                        )}
                                        </tbody>
                                    </table>
                                </>
                            )
                    }
                </div>
            </div>
        </div>
    )
}

function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
}