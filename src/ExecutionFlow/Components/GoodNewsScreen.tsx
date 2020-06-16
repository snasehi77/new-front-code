import * as React from "react";
import { Button } from "reactstrap";
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
  header: string,
  title: string,
  subtitle: string,
  options: Array<Options>,
  onNext: (e: any) => void,
  modalClose: boolean,
  setModalClose: (value: any) => void
}

const GoodNewsScreen: React.FC<Props> = ({
  setVisible,
  header,
  title,
  subtitle,
  options,
  onNext,
  modalClose,
  setModalClose
}) => {
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
        <div className="hm-good-news-subtitle hm-mt-1">
          {title}
        </div>
        <div className="hm-good-news-subtitle">
          {subtitle}
        </div>
      </div>

      <div className="hm-good-news-buttons">
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
      </div>
    </div>
  )
}

export default GoodNewsScreen