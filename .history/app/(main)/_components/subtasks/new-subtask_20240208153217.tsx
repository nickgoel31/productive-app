"use client"

import { Plus } from 'lucide-react'
import React from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"



const formSchema = z.object({
  username: z.string().min(2).max(50),
})


const NewSubtask = () => {
  return (
    <Dialog>
        <DialogTrigger>
            <div className='w-full py-1 flex gap-1 items-center justify-center text-xs font-medium text-neutral-400 hover:text-neutral-100 transition-all cursor-pointer'>
                Add a new subtask
                <Plus size={14}/>
            </div>
        </DialogTrigger>

        <DialogContent className='w-full  flex flex-col'>
            <DialogHeader>
                <DialogTitle>
                    Add a new subtask
                </DialogTitle>
                <DialogDescription>
                    New subtask will be created.
                </DialogDescription>
            </DialogHeader>

            <Input type='text' placeholder='eg- Make a navbar'/>

            <div className='w-full flex items-center justify-end mt-1'>
                <DialogClose className=''>
                    <Button>
                        Add
                    </Button>
                </DialogClose>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default NewSubtask