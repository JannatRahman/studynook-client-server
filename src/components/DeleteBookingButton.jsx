"use client";


import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";


const DeleteBookingButton = ({ room }) => {
    const { _id, name } = room;

    const handleDelete = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studyrooms/${_id}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' }
        })
        const data = await res.json();
        redirect('/all-rooms')
    

    }

    return (
        <AlertDialog>
            <Button
                className='border border-red-600 rounded-none text-red-600 hover:bg-red-600 hover:text-white'
                color="danger"
                variant="outline"
                size="sm"
            >
                Delete
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Confirm Deletation</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p className="text-slate-600">
                                Are you sure you want to Delete <strong>{name}</strong>? This action cannot be undone and you
                                will lose access to the course materials.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button
                                className='font-bold bg-[#84B179] text-white'
                                slot="close"
                                variant="tertiary"
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={handleDelete}
                                slot="close"

                                className="bg-[#84B179] hover:bg-red-500 font-bold "

                            >
                                Yes, Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default DeleteBookingButton;