/* =========================
   CASH / PAYMENT SOUND
========================= */

function playCashSound() {

    try {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;

        const audioContext =
            new AudioContext();

        const now =
            audioContext.currentTime;


        // صوت العملة الأول
        const coin1 =
            audioContext.createOscillator();

        const gain1 =
            audioContext.createGain();


        coin1.type = "sine";

        coin1.frequency.setValueAtTime(
            900,
            now
        );

        coin1.frequency.exponentialRampToValueAtTime(
            1500,
            now + 0.08
        );


        gain1.gain.setValueAtTime(
            0.0001,
            now
        );

        gain1.gain.exponentialRampToValueAtTime(
            0.25,
            now + 0.01
        );

        gain1.gain.exponentialRampToValueAtTime(
            0.0001,
            now + 0.13
        );


        coin1.connect(gain1);

        gain1.connect(
            audioContext.destination
        );


        coin1.start(now);

        coin1.stop(
            now + 0.13
        );


        // صوت العملة الثاني
        const coin2 =
            audioContext.createOscillator();

        const gain2 =
            audioContext.createGain();


        coin2.type = "triangle";

        coin2.frequency.setValueAtTime(
            1300,
            now + 0.12
        );

        coin2.frequency.exponentialRampToValueAtTime(
            1900,
            now + 0.20
        );


        gain2.gain.setValueAtTime(
            0.0001,
            now + 0.12
        );

        gain2.gain.exponentialRampToValueAtTime(
            0.20,
            now + 0.14
        );

        gain2.gain.exponentialRampToValueAtTime(
            0.0001,
            now + 0.27
        );


        coin2.connect(gain2);

        gain2.connect(
            audioContext.destination
        );


        coin2.start(
            now + 0.12
        );

        coin2.stop(
            now + 0.27
        );


        // إغلاق الصوت بعد الانتهاء
        setTimeout(() => {

            audioContext.close();

        }, 500);

    } catch (error) {

        console.log(
            "Audio unavailable:",
            error
        );

    }

}