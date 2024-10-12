import './Article.css';

export default function DriftPage() {
    return (
        <article className="Article">
            <h1 className="Article__title">Дрифт-такси</h1>
            <p className="Article__paragraph">
                Только на Сочи Автодроме вас ждет уникальная возможность промчаться по
                трассе Формулы 1 на максимально возможной скорости в управляемом заносе
                на легендарной «королеве дрифта» Nissan Silvia!
            </p>
            <p className="Article__paragraph">
                Прокатитесь на дрифт-такси с вице-чемпионом Межконтинентального кубка по
                дрифту под эгидой FIA 2017 года Аркадием Цареградцевым и испытайте на
                себе, что значат скоростные постановки и эффектные заносы!
            </p>
        </article>
    );
}