import { default as deviceDisplay } from '../../../../../assets/images/effects/display-responsive-devices.png';

type DeviceScrollProps = {
  imageSrc: string | null;
  inView: boolean;
  title: string;
};

const DeviceScroll = ({ imageSrc, inView, title }: DeviceScrollProps) => {
  return (
    <div className="flex-1 animate-fadeInSlow">
      {imageSrc && (
        <div className="relative h-72">
          <div
            className={`absolute mt-2 h-[193px] md:h-[28vw] lg:h-[278px] overflow-hidden`}
          >
            <img
              src={imageSrc}
              alt={''}
              style={{ maxWidth: '100%' }}
              className={
                inView ? 'animate-scrollUp min-w-[700px]' : ' min-w-[700px]'
              }
            />
          </div>
          <img
            src={deviceDisplay as string}
            alt={title}
            className="absolute min-w-[700px]"
          />
        </div>
      )}
    </div>
  );
};

export default DeviceScroll;
