import * as React from "react";
import { Button } from "reactstrap";
import { first } from "lodash";
import icon_handshake from "../../Assets/icons/handshake.png";
import icon_close from "../../Assets/icons/icn_close_light.svg";
import LeaveModal from "./LeaveModal";

interface Options {
  label: string,
  value: string,
  data: any,
  id: string
}

interface Props {
  setVisible: (value: boolean) => void,
  labels: Array<string>,
  options?: Array<Options>,
  link?: string | undefined,
  linkLabel?: string | undefined,
  onNext: (e: any) => void,
  modalClose: boolean,
  setModalClose: (value: any) => void
}

const OverlayScreen: React.FC<Props> = ({
  setVisible,
  labels,
  options,
  link,
  linkLabel,
  onNext,
  modalClose,
  setModalClose
}) => {
  const [ header, ...others ] = labels
  return (
    <div className="hm-view-main-wrapper hm-position-relative hm-h-100 hm-overflow-y-auto hm-good-news">
      <Button
        color="link"
        className="hm-button-close"
        onClick={() => setModalClose(true)}
        type="button"
      >
        <img src={icon_close} />
      </Button>

      <LeaveModal 
        modalVisible={modalClose} 
        setModalVisible={setModalClose} 
      />
      
      <div className="hm-good-news-img-wrapper">
        <img src={icon_handshake} alt="handshake" />
      </div>
      <div>
        <div className="hm-good-news-header hm-mt-2">
          {header}
        </div>
        <div className="hm-mt-1">
          {others.map((item) => (
            <div key={item} className="hm-good-news-subtitle">
              {item}
            </div>
          ))}
        </div>
      </div>

      {!!link && <div className="hm-good-news-buttons">
        <button
          type="submit"
          onClick={(e) => {
            setVisible(false)
            onNext(e)
            window.open(link)
          }}
          className="hm-good-news-button-primary hm-w-100"
        >
        {linkLabel}
        </button>
      </div>}

      {options && options.length > 0 && <div className="hm-good-news-buttons">
        {options.map((o, index) => {
          if (options.length > 1 && index === options.length - 1) {
            return (
              <button
                key={o.id}
                type="submit"
                onClick={(e) => {
                  setVisible(false)
                  onNext({ value: o.value, data: o.data })
                }}
                className="hm-good-news-button-secondary hm-w-100"
              >
                {o.label}
              </button>
            )
          }
          return (
            <button
              key={o.id}
              type="submit"
              onClick={(e) => {
                setVisible(false)
                onNext({ value: o.value, data: o.data })
              }}
              className="hm-good-news-button-primary hm-w-100 hm-mb-2"
            >
              {o.label}
            </button>
          )
        })}
      </div>}
    </div>
  )
}

export default OverlayScreen