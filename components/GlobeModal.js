export default function GlobeModal(props) {
  return (
    <div className="min-height-100vh flex items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-900 opacity-75" />
      </div>
      <span className="hidden sm:inline-block sm:h-screen sm:align-middle">&#8203;</span>
      <div
        className="align-center inline-block transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div className="absolute right-2">
          <button onClick={props.toggleModal}>x</button>
        </div>
        {/* -----------------Content----------------------- */}
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">{props.modalData}</div>
      </div>
    </div>
  )
}
