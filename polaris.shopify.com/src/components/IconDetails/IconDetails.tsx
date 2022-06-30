import Link from "next/link";
import { className } from "../../utils/various";
import Image from "../Image";
import CodeExample from "../CodeExample";
import styles from "./IconDetails.module.scss";

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

interface Props {
  fileName: string;
  name: string;
  set: string;
  description: string;
  keywords: string[];
  query: string;
}

function IconDetails({
  fileName,
  set,
  description,
  name,
  keywords,
  query,
}: Props) {
  return (
    <>
      <div className={styles.Preview}>
        <div className={styles.PreviewImage}>
          <Image
            src={`/icons/${fileName}.svg`}
            alt={description}
            width={44}
            height={44}
            icon
          />
        </div>
      </div>

      <div className={className(styles.SidebarSection, styles.IconInfo)}>
        <h2 className={styles.Title}>
          {/* {isInModal && (
            <Dialog.Title>{name}</Dialog.Title>
          ) */}
          {capitalizeFirstLetter(name)}{" "}
          <div className={styles.IconSet}>{capitalizeFirstLetter(set)}</div>
        </h2>

        {description !== "N/A" && (
          <p className={styles.IconDescription}>{description} </p>
        )}

        <p className={styles.Keywords}>
          {keywords
            .filter((keyword) => keyword !== "N/A")
            .map((keyword) => {
              return (
                <Link
                  key={keyword}
                  href={{ query: { icon: fileName, q: keyword } }}
                  scroll={false}
                >
                  {capitalizeFirstLetter(keyword)}
                </Link>
              );
            })}
        </p>

        <div className={styles.ActionButtons}>
          <a
            className={styles.DownloadIconButton}
            href={`/icons/${fileName}.svg`}
            download
          >
            Download
          </a>
        </div>
      </div>

      <div className={styles.SidebarSection}>
        <h3 className={styles.Subtitle}>Figma</h3>
        <p className={styles.SmallParagraph}>
          Use the{" "}
          <a href="https:www.figma.com/community/file/1110993965108325096">
            Polaris Icon Library
          </a>{" "}
          to access all icons right inside Figma.
        </p>
      </div>

      <div className={styles.SidebarSection}>
        <h3 className={styles.Subtitle}>React</h3>

        <div className={styles.ReactStep}>
          <p className={styles.SmallParagraph}>
            <span className={styles.StepDigit}>1</span> Import the icon from{" "}
            <a href="https:www.npmjs.com/package/@shopify/polaris-icons#usage">
              polaris-icons
            </a>
            :
          </p>

          <div className={styles.CodeExampleWrapper}>
            <CodeExample language="typescript" minimalist>
              {`import {
  ${fileName}
} from '@shopify/polaris-icons';`}
            </CodeExample>
          </div>
        </div>

        <div className={styles.ReactStep}>
          <p className={styles.SmallParagraph}>
            <span className={styles.StepDigit}>2</span> Then render it using the{" "}
            <a href="https:polaris.shopify.com/components/icon">
              icon component
            </a>
            :
          </p>

          <div className={styles.CodeExampleWrapper}>
            <CodeExample language="typescript" minimalist>
              {`<Icon
  source={${fileName}}
  color="base"
/>`}
            </CodeExample>
          </div>
        </div>
      </div>

      <div className={styles.SidebarSection}>
        <div className={styles.ProposeChange}>
          <Link
            href={`https://github.com/Shopify/polaris/issues/new?title=Propose change ${fileName}&labels=Icon`}
          >
            Propose a change to this icon
          </Link>
        </div>
      </div>
    </>
  );
}

export default IconDetails;
