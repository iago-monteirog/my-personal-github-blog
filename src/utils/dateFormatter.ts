import { formatDistanceToNow } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';


export function createdAtDateRelativeToNow(dateString: string) {
    const date = new Date(dateString);

    const newDate = formatDistanceToNow(date, {
        locale: ptBR,
        addSuffix: true
    });

    return newDate;
}