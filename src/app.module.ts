import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import configuration from './share_modules/config/configuration';
import { validate } from './share_modules/config/validate.config';
import { SharedModule } from './share_modules/share.module';
import { DepartmentModule } from './modules/department/department.module';
import { PolicyModule } from './modules/policy/policy.module';
import { NewsModule } from './modules/news/news.module';
import { TestModule } from './modules/test/test.module';
import { TestTableModule } from './modules/test-table/test-table.module';
import { RecordQuestionModule } from './record_question/record_question.module';
import { RequireTextModule } from './require-text/require-text.module';
import { PlayerInfoModule } from './player-info/player-info.module';
import { FileRecordUserModule } from './file-record-user/file-record-user.module';
import { VoiceRecordModule } from './voice_record/voice_record.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: ['.env'],
      validationSchema: validate,
      validationOptions: {
        abortEarly: true,
      },
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.SMTP_SERVER,
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
      },
    }),
    ScheduleModule.forRoot(),
    SharedModule,
    UserModule,
    AuthModule,
    DepartmentModule,
    PolicyModule,
    NewsModule,
    TestModule,
    TestTableModule,
    RecordQuestionModule,
    RequireTextModule,
    PlayerInfoModule,
    FileRecordUserModule,
    VoiceRecordModule,
  ],
  // providers: [FirebaseService],
})
export class AppModule {}
