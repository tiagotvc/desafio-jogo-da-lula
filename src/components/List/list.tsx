import React from 'react';
import { Container } from './list.styles';
import { IList, TList } from 'interfaces/List/list.interface';
import { Typograph } from 'components/Typography/typography';



export const List: React.FC<IList> = ({ items }) => {
    return <Container>{items.map((item: TList) => (
        <li>
            <div className='avatar-and-name'>
                <img src="/images/avatar.png" alt='' width={32} height={32}/>
                <Typograph variant='body3'>{item.name}</Typograph>

            </div>
            
            <Typograph variant='body3'>{item.money}</Typograph>
        </li>
    ))}</Container>
}