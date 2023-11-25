import { useState } from 'react';
import classNames from 'classnames';
import Card from '@/components/ui/Card';
import Calendar from '@/components/ui/Calendar';
import Badge from '@/components/ui/Badge';
import useThemeClass from '@/utils/hooks/useThemeClass';
import Button from '@/components/ui/Button';
import { FormItem, FormContainer } from '@/components/ui/Form';
import Select from '@/components/ui/Select';
import Tag from '@/components/ui/Tag'
import WaitingList from './WaitingList';
import OngoingTasks from './OngoingTasks';
import WaitingRoom from './WaitingRoom';
import RdvListModal from '../modals/rdv/RdvListModal';
import RdvFormModal from '../modals/rdv/RdvFormModal';

type ScheduleProps = {
    data?: {
        id: string
        time: string
        eventName: string
        desciption: string
        type: string
    }[]
}

const isToday = (someDate: Date) => {
    const today = new Date()
    return (
        someDate.getDate() === today.getDate() &&
        someDate.getMonth() === today.getMonth() &&
        someDate.getFullYear() === today.getFullYear()
    )
}

const Schedule = ({ data = [] }: ScheduleProps) => {
    const [value, setValue] = useState<Date | null>()
    
    const [rdvListIsOpen, setRdvListIsOpen] = useState(false);
    const [rdvFormIsOpen, setRdvFormIsOpen] = useState(false);

    const { textTheme } = useThemeClass()

    const handleRdvFormModal = (val:boolean) => {
        document.body.style.overflow = val === true ? 'hidden' : '';
        setRdvFormIsOpen(val);
    };

    const handleRdvListModal = (val:boolean) => {
        document.body.style.overflow = val === true ? 'hidden' : '';
        setRdvListIsOpen(val);
    };


    return (
        <>        
        <Card className="mb-4">
            <div className="mx-auto max-w-[420px]">
                <Calendar
                    value={value}
                    dayClassName={(date, { selected }) => {
                        const defaultClass = 'text-base'

                        if (isToday(date) && !selected) {
                            return classNames(defaultClass, textTheme)
                        }

                        if (selected) {
                            return classNames(defaultClass, 'text-white')
                        }

                        return defaultClass
                    }}
                    dayStyle={() => {
                        return { height: 48 }
                    }}
                    renderDay={(date) => {
                        const day = date.getDate()

                        if (!isToday(date)) {
                            return <span>{day}</span>
                        }

                        return (
                            <span className="relative flex justify-center items-center w-full h-full">
                                {day}
                                <Badge
                                    className="absolute bottom-1"
                                    innerClass="h-1 w-1"
                                />
                            </span>
                        )
                    }}
                    onChange={(val) => {
                        setValue(val)
                    }}
                />
            </div>
            
            <hr className="my-6" />
            
            <div className="flex flex-col gap-3">
                <Button variant="solid" className='bg-nael-blue-600'
                onClick={()=>handleRdvFormModal(true)}
                >Nouveau rendez-vous</Button>
                <RdvFormModal
                dialogIsOpen={rdvFormIsOpen}
                setIsOpen={handleRdvFormModal}
                />

                <Button variant="twoTone" className='text-nael-violet-600 bg-nael-lighten-600'
                onClick={()=>handleRdvListModal(true)}
                >Voir la liste des rendez-vous</Button>
                <RdvListModal
                dialogIsOpen={rdvListIsOpen}
                setIsOpen={handleRdvListModal}
                />
            </div>            
            
            <hr className="my-6" />

            <div className="flex flex-col">
                <FormItem
                    label="Patients"
                    className='flex justify-between m-2'
                >
                    <Select
                        placeholder="Nb. patients"
                        options={[
                            { value: '1', label: '1 patient'},
                            { value: '2', label: '2 patients'},
                        ]}
                    ></Select>
                </FormItem>
                <FormItem
                    label="Salles"
                    className='flex justify-between m-2'
                >
                    <Select
                        placeholder="Nb. salles"
                        options={[
                            { value: '1', label: '1 salle'},
                            { value: '2', label: '2 salles'},
                        ]}
                    ></Select>
                </FormItem>
            </div>

            <hr className="my-6" />
            <WaitingList/>

            <hr className="my-6" />
            <OngoingTasks/>

            <hr className="my-6" />
            <WaitingRoom/>

        </Card>

        </>
    )
}

export default Schedule
