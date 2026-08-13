import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';
import { createEmbed } from '../../utils/embeds.js';
import { logger } from '../../utils/logger.js';
import { InteractionHelper } from '../../utils/interactionHelper.js';

export default {
    data: new SlashCommandBuilder()
        .setName('setup-rules')
        .setDescription('Posts the RIXZY LEAKS server rules')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction) {
        const deferSuccess = await InteractionHelper.safeDefer(interaction);

        if (!deferSuccess) {
            logger.warn('Setup-rules interaction defer failed');
            return;
        }

        try {
            const embed = createEmbed({
                title: '📜 RIXZY LEAKS — SERVER RULES',
                description: `
🇪🇸 **REGLAS**

Bienvenido/a a **RIXZY LEAKS**. Al permanecer en este servidor, aceptas respetar las siguientes reglas.

**01. Respeto**
Trata a todos los miembros con respeto. No se permite acoso, amenazas, discriminación ni comportamiento tóxico.

**02. No Spam**
Evita el spam, flood, mensajes repetitivos y menciones excesivas.

**03. No Publicidad**
No promociones otros servidores, productos o servicios sin autorización.

**04. Contenido Malicioso**
No compartas malware, scams, phishing o enlaces peligrosos.

**05. Usa los canales correctamente**
Publica cada contenido en el canal correspondiente.

**06. Tickets**
Utiliza los tickets únicamente cuando necesites asistencia. No abras tickets falsos o innecesarios.

**07. Respeta al Staff**
Respeta las decisiones del Staff y utiliza el sistema de soporte si necesitas ayuda.

**08. No evadas sanciones**
No utilices cuentas alternativas para evadir sanciones.

**09. Privacidad**
No compartas información personal tuya o de otros usuarios sin autorización.

**10. Sentido común**
El Staff puede tomar medidas ante comportamientos que afecten negativamente a la comunidad.

━━━━━━━━━━━━━━━━━━

🇺🇸 **RULES**

Welcome to **RIXZY LEAKS**. By remaining in this server, you agree to follow these rules.

**01. Respect**
Treat everyone with respect. Harassment, threats, discrimination, and toxic behavior are not allowed.

**02. No Spam**
Do not spam, flood chats, send repetitive messages, or abuse mentions.

**03. No Advertising**
Do not advertise other servers, products, or services without permission.

**04. Malicious Content**
Do not share malware, scams, phishing, or dangerous links.

**05. Use Channels Correctly**
Keep content in the appropriate channels.

**06. Tickets**
Only create tickets when you genuinely need assistance. Do not create fake or unnecessary tickets.

**07. Respect Staff**
Respect Staff decisions and use the support system if you need help.

**08. No Punishment Evasion**
Do not use alternate accounts to bypass punishments.

**09. Privacy**
Do not share personal information belonging to yourself or others without permission.

**10. Common Sense**
Staff may take action against behavior that negatively affects the community.

━━━━━━━━━━━━━━━━━━

💙 **Thank you for being part of RIXZY LEAKS.**
**Gracias por formar parte de RIXZY LEAKS.**
`
            });

            await InteractionHelper.safeEditReply(interaction, {
                embeds: [embed],
            });

            logger.info(`Rules setup executed by ${interaction.user.tag}`);

        } catch (error) {
            logger.error('Setup-rules command error:', error);

            await InteractionHelper.safeReply(interaction, {
                content: '❌ An error occurred while setting up the rules.',
            });
        }
    },
};