import { useEffect } from 'react'
import { SelectPastDate } from '../SelectPastDate/SelectPastDate'
import { FormProvider, useForm } from 'react-hook-form'
import { PrioritySelect } from '../Select/PrioritySelect'
import { InputSearch } from '../InputSearch/InputSearch'
import { Button } from '../Button/Button'
import { useDispatch } from 'react-redux'
import { fetchSearchCard } from '../../API/fetchSearchCard'
export const SearchForm = () => {
    const dispatch = useDispatch();


    const formProps = useForm({
        defaultValues: {
            cardsSearch: "",
            priority: "",
            status: ""
        }
    })

    const { handleSubmit, watch } = formProps;
    const cardSearchPriority = watch("priority")
    const cardName = watch("cardsSearch")
    const cardStatus = watch("status")

    useEffect(() => {
        const timeout = setTimeout(() => {

            dispatch(
                fetchSearchCard(
                    { cardsSearch: cardName, priority: cardSearchPriority, status: cardStatus }))
        }, 500);
        return () => {
            clearTimeout(timeout);
        };
    }, [cardSearchPriority, cardName, cardStatus])


    const onSubmit = (formData) => {
        dispatch(fetchSearchCard(formData));
    }
    return (
        <FormProvider {...formProps}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputSearch />
                <PrioritySelect />
                <SelectPastDate />
                <Button type="submit" text="Submit" className="button searchButton" />
            </form>
        </FormProvider>

    )
}
