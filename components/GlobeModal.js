export default function GlobeModal(props) {
  return (
    <div className="flex items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
      <div
        className="align-center inline-block transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
        role="dialog"
      >
        <div className="absolute right-2"></div>
        {/* -----------------Content----------------------- */}
        {props.modalData ? (
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex flex-row justify-between">
              <div className="text-[24px] font-bold">{props.modalData.title}</div>
              <button onClick={props.toggleModal}>X</button>
            </div>
            <br />
            <div className="">{props.modalData.line1}</div>
            <div className="">{props.modalData.line2}</div>
            <div className="">{props.modalData.country}</div>
            <br />
            <div className="">{props.modalData.phone}</div>
            <div className="">{props.modalData.email}</div>
            <div className="">{props.modalData.worktime1}</div>
            <div className="">{props.modalData.worktime2}</div>
            <br />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
