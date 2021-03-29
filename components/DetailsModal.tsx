import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    ModalCloseButton,
  } from "@chakra-ui/react"
import React from "react"

export function DetailsModal() {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
            To the moon, right? 
        </ModalBody>

        <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
        </ModalContent>
    </Modal>
  )
}
