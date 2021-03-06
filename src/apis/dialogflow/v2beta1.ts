/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format

/**
 * Dialogflow API
 *
 * An end-to-end development suite for conversational interfaces (e.g.,
 * chatbots, voice-powered apps and devices).
 *
 * @example
 * const google = require('googleapis');
 * const dialogflow = google.dialogflow('v2beta1');
 *
 * @namespace dialogflow
 * @type {Function}
 * @version v2beta1
 * @variation v2beta1
 * @param {object=} options Options for Dialogflow
 */
export class Dialogflow {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  projects: Resource$Projects;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;

    this.projects = new Resource$Projects(this);
  }
}

/**
 * The response message for EntityTypes.BatchUpdateEntityTypes.
 */
export interface Schema$GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse {
  /**
   * The collection of updated or created entity types.
   */
  entityTypes: Schema$GoogleCloudDialogflowV2EntityType[];
}
/**
 * The response message for Intents.BatchUpdateIntents.
 */
export interface Schema$GoogleCloudDialogflowV2BatchUpdateIntentsResponse {
  /**
   * The collection of updated or created intents.
   */
  intents: Schema$GoogleCloudDialogflowV2Intent[];
}
/**
 * Represents a conversational agent.
 */
export interface Schema$GoogleCloudDialogflowV2beta1Agent {
  /**
   * Optional. The URI of the agent&#39;s avatar. Avatars are used throughout
   * API.AI console and in the self-hosted [Web
   * Demo](https://dialogflow.com/docs/integrations/web-demo) integration.
   */
  avatarUri: string;
  /**
   * Optional. To filter out false positive results and still get variety in
   * matched natural language inputs for your agent, you can tune the machine
   * learning classification threshold. If the returned score value is less than
   * the threshold value, then a fallback intent is be triggered or, if there
   * are no fallback intents defined, no intent will be triggered. The score
   * values range from 0.0 (completely uncertain) to 1.0 (completely certain).
   * If set to 0.0, the default of 0.3 is used.
   */
  classificationThreshold: number;
  /**
   * Required. The default language of the agent as a language tag. See
   * [Language Support](https://dialogflow.com/docs/reference/language) for a
   * list of the currently supported language codes. This field cannot be set by
   * the `Update` method.
   */
  defaultLanguageCode: string;
  /**
   * Optional. The description of this agent. The maximum length is 500
   * characters. If exceeded, the request is rejected.
   */
  description: string;
  /**
   * Required. The name of this agent.
   */
  displayName: string;
  /**
   * Optional. Determines whether this agent should log conversation queries.
   */
  enableLogging: boolean;
  /**
   * Optional. Determines how intents are detected from user queries.
   */
  matchMode: string;
  /**
   * Required. The project of this agent. Format: `projects/&lt;Project ID&gt;`.
   */
  parent: string;
  /**
   * Optional. The list of all languages supported by this agent (except for the
   * `default_language_code`).
   */
  supportedLanguageCodes: string[];
  /**
   * Required. The time zone of this agent from the [time zone
   * database](https://www.iana.org/time-zones), e.g., America/New_York,
   * Europe/Paris.
   */
  timeZone: string;
}
/**
 * The request message for EntityTypes.BatchCreateEntities.
 */
export interface Schema$GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest {
  /**
   * Required. The collection of entities to create.
   */
  entities: Schema$GoogleCloudDialogflowV2beta1EntityTypeEntity[];
  /**
   * Optional. The language of entity synonyms defined in `entities`. If not
   * specified, the agent&#39;s default language is used. [More than a dozen
   * languages](https://dialogflow.com/docs/reference/language) are supported.
   * Note: languages must be enabled in the agent, before they can be used.
   */
  languageCode: string;
}
/**
 * The request message for EntityTypes.BatchDeleteEntities.
 */
export interface Schema$GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest {
  /**
   * Required. The canonical `values` of the entities to delete. Note that these
   * are not fully-qualified names, i.e. they don&#39;t start with
   * `projects/&lt;Project ID&gt;`.
   */
  entityValues: string[];
  /**
   * Optional. The language of entity synonyms defined in `entities`. If not
   * specified, the agent&#39;s default language is used. [More than a dozen
   * languages](https://dialogflow.com/docs/reference/language) are supported.
   * Note: languages must be enabled in the agent, before they can be used.
   */
  languageCode: string;
}
/**
 * The request message for EntityTypes.BatchDeleteEntityTypes.
 */
export interface Schema$GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest {
  /**
   * Required. The names entity types to delete. All names must point to the
   * same agent as `parent`.
   */
  entityTypeNames: string[];
}
/**
 * The request message for Intents.BatchDeleteIntents.
 */
export interface Schema$GoogleCloudDialogflowV2beta1BatchDeleteIntentsRequest {
  /**
   * Required. The collection of intents to delete. Only intent `name` must be
   * filled in.
   */
  intents: Schema$GoogleCloudDialogflowV2beta1Intent[];
}
/**
 * The response message for EntityTypes.BatchCreateEntities.
 */
export interface Schema$GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest {
  /**
   * Required. The collection of new entities to replace the existing entities.
   */
  entities: Schema$GoogleCloudDialogflowV2beta1EntityTypeEntity[];
  /**
   * Optional. The language of entity synonyms defined in `entities`. If not
   * specified, the agent&#39;s default language is used. [More than a dozen
   * languages](https://dialogflow.com/docs/reference/language) are supported.
   * Note: languages must be enabled in the agent, before they can be used.
   */
  languageCode: string;
  /**
   * Optional. The mask to control which fields get updated.
   */
  updateMask: string;
}
/**
 * The request message for EntityTypes.BatchUpdateEntityTypes.
 */
export interface Schema$GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest {
  /**
   * The collection of entity type to update or create.
   */
  entityTypeBatchInline: Schema$GoogleCloudDialogflowV2beta1EntityTypeBatch;
  /**
   * The URI to a Google Cloud Storage file containing entity types to update or
   * create. The file format can either be a serialized proto (of EntityBatch
   * type) or a JSON object. Note: The URI must start with &quot;gs://&quot;.
   */
  entityTypeBatchUri: string;
  /**
   * Optional. The language of entity synonyms defined in `entity_types`. If not
   * specified, the agent&#39;s default language is used. [More than a dozen
   * languages](https://dialogflow.com/docs/reference/language) are supported.
   * Note: languages must be enabled in the agent, before they can be used.
   */
  languageCode: string;
  /**
   * Optional. The mask to control which fields get updated.
   */
  updateMask: string;
}
/**
 * The response message for EntityTypes.BatchUpdateEntityTypes.
 */
export interface Schema$GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse {
  /**
   * The collection of updated or created entity types.
   */
  entityTypes: Schema$GoogleCloudDialogflowV2beta1EntityType[];
}
/**
 * The request message for Intents.BatchUpdateIntents.
 */
export interface Schema$GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequest {
  /**
   * The collection of intents to update or create.
   */
  intentBatchInline: Schema$GoogleCloudDialogflowV2beta1IntentBatch;
  /**
   * The URI to a Google Cloud Storage file containing intents to update or
   * create. The file format can either be a serialized proto (of IntentBatch
   * type) or JSON object. Note: The URI must start with &quot;gs://&quot;.
   */
  intentBatchUri: string;
  /**
   * Optional. The resource view to apply to the returned intent.
   */
  intentView: string;
  /**
   * Optional. The language of training phrases, parameters and rich messages
   * defined in `intents`. If not specified, the agent&#39;s default language is
   * used. [More than a dozen
   * languages](https://dialogflow.com/docs/reference/language) are supported.
   * Note: languages must be enabled in the agent, before they can be used.
   */
  languageCode: string;
  /**
   * Optional. The mask to control which fields get updated.
   */
  updateMask: string;
}
/**
 * The response message for Intents.BatchUpdateIntents.
 */
export interface Schema$GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse {
  /**
   * The collection of updated or created intents.
   */
  intents: Schema$GoogleCloudDialogflowV2beta1Intent[];
}
/**
 * Represents a context.
 */
export interface Schema$GoogleCloudDialogflowV2beta1Context {
  /**
   * Optional. The number of conversational query requests after which the
   * context expires. If set to `0` (the default) the context expires
   * immediately. Contexts expire automatically after 10 minutes even if there
   * are no matching queries.
   */
  lifespanCount: number;
  /**
   * Required. The unique identifier of the context. Format:
   * `projects/&lt;Project ID&gt;/agent/sessions/&lt;Session
   * ID&gt;/contexts/&lt;Context ID&gt;`, or `projects/&lt;Project
   * ID&gt;/agent/runtimes/&lt;Runtime ID&gt;/sessions/&lt;Session
   * ID&gt;/contexts/&lt;Context ID&gt;`. Note: Runtimes are under construction
   * and will be available soon. The Context ID is always converted to
   * lowercase. If &lt;Runtime ID&gt; is not specified, we assume default
   * &#39;sandbox&#39; runtime.
   */
  name: string;
  /**
   * Optional. The collection of parameters associated with this context. Refer
   * to [this doc](https://dialogflow.com/docs/actions-and-parameters) for
   * syntax.
   */
  parameters: any;
}
/**
 * The request to detect user&#39;s intent.
 */
export interface Schema$GoogleCloudDialogflowV2beta1DetectIntentRequest {
  /**
   * Optional. The natural language speech audio to be processed. This field
   * should be populated iff `query_input` is set to an input audio config. A
   * single request can contain up to 1 minute of speech audio data.
   */
  inputAudio: string;
  /**
   * Required. The input specification. It can be set to:  1.  an audio config
   * which instructs the speech recognizer how to process the speech audio,  2.
   * a conversational query in the form of text, or  3.  an event that specifies
   * which intent to trigger.
   */
  queryInput: Schema$GoogleCloudDialogflowV2beta1QueryInput;
  /**
   * Optional. The parameters of this query.
   */
  queryParams: Schema$GoogleCloudDialogflowV2beta1QueryParameters;
}
/**
 * The message returned from the DetectIntent method.
 */
export interface Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse {
  /**
   * The results of the conversational query or event processing.
   */
  queryResult: Schema$GoogleCloudDialogflowV2beta1QueryResult;
  /**
   * The unique identifier of the response. It can be used to locate a response
   * in the training example set or for reporting issues.
   */
  responseId: string;
  /**
   * Specifies the status of the webhook request. `webhook_status` is never
   * populated in webhook requests.
   */
  webhookStatus: Schema$GoogleRpcStatus;
}
/**
 * Represents an entity type. Entity types serve as a tool for extracting
 * parameter values from natural language queries.
 */
export interface Schema$GoogleCloudDialogflowV2beta1EntityType {
  /**
   * Optional. Indicates whether the entity type can be automatically expanded.
   */
  autoExpansionMode: string;
  /**
   * Required. The name of the entity.
   */
  displayName: string;
  /**
   * Optional. The collection of entities associated with the entity type.
   */
  entities: Schema$GoogleCloudDialogflowV2beta1EntityTypeEntity[];
  /**
   * Required. Indicates the kind of entity type.
   */
  kind: string;
  /**
   * Required for all methods except `create` (`create` populates the name
   * automatically. The unique identifier of the entity type. Format:
   * `projects/&lt;Project ID&gt;/agent/entityTypes/&lt;Entity Type ID&gt;`.
   */
  name: string;
}
/**
 * This message is a wrapper around a collection of entity types.
 */
export interface Schema$GoogleCloudDialogflowV2beta1EntityTypeBatch {
  /**
   * A collection of entity types.
   */
  entityTypes: Schema$GoogleCloudDialogflowV2beta1EntityType[];
}
/**
 * Optional. Represents an entity.
 */
export interface Schema$GoogleCloudDialogflowV2beta1EntityTypeEntity {
  /**
   * Required. A collection of synonyms. For `KIND_LIST` entity types this must
   * contain exactly one synonym equal to `value`.
   */
  synonyms: string[];
  /**
   * Required. For `KIND_MAP` entity types:   A canonical name to be used in
   * place of synonyms. For `KIND_LIST` entity types:   A string that can
   * contain references to other entity types (with or   without aliases).
   */
  value: string;
}
/**
 * Events allow for matching intents by event name instead of the natural
 * language input. For instance, input `&lt;event: { name: “welcome_event”,
 * parameters: { name: “Sam” } }&gt;` can trigger a personalized welcome
 * response. The parameter `name` may be used by the agent in the response:
 * `“Hello #welcome_event.name! What can I do for you today?”`.
 */
export interface Schema$GoogleCloudDialogflowV2beta1EventInput {
  /**
   * Required. The language of this query. See [Language
   * Support](https://dialogflow.com/docs/languages) for a list of the currently
   * supported language codes. Note that queries in the same session do not
   * necessarily need to specify the same language.
   */
  languageCode: string;
  /**
   * Required. The unique identifier of the event.
   */
  name: string;
  /**
   * Optional. The collection of parameters associated with the event.
   */
  parameters: any;
}
/**
 * The request message for Agents.ExportAgent.
 */
export interface Schema$GoogleCloudDialogflowV2beta1ExportAgentRequest {
  /**
   * Optional. The Google Cloud Storage URI to export the agent to. Note: The
   * URI must start with &quot;gs://&quot;. If left unspecified, the serialized
   * agent is returned inline.
   */
  agentUri: string;
}
/**
 * The response message for Agents.ExportAgent.
 */
export interface Schema$GoogleCloudDialogflowV2beta1ExportAgentResponse {
  /**
   * The exported agent.  Example for how to export an agent to a zip file via a
   * command line:  curl \
   * &#39;https://dialogflow.googleapis.com/v2beta1/projects/&lt;project_name&gt;/agent:export&#39;\
   * -X POST \   -H &#39;Authorization: Bearer &#39;$(gcloud auth
   * print-access-token) \   -H &#39;Accept: application/json&#39; \   -H
   * &#39;Content-Type: application/json&#39; \   --compressed \   --data-binary
   * &#39;{}&#39; \ | grep agentContent | sed -e
   * &#39;s/.*&quot;agentContent&quot;: &quot;\([^&quot;]*\)&quot;.x/\1/&#39; \
   * | base64 --decode &gt; &lt;agent zip file&gt;
   */
  agentContent: string;
  /**
   * The URI to a file containing the exported agent. This field is populated
   * only if `agent_uri` is specified in `ExportAgentRequest`.
   */
  agentUri: string;
}
/**
 * The request message for Agents.ImportAgent.
 */
export interface Schema$GoogleCloudDialogflowV2beta1ImportAgentRequest {
  /**
   * The agent to import.  Example for how to import an agent via the command
   * line:  curl \
   * &#39;https://dialogflow.googleapis.com/v2beta1/projects/&lt;project_name&gt;/agent:import\
   * -X POST \    -H &#39;Authorization: Bearer &#39;$(gcloud auth
   * print-access-token) \    -H &#39;Accept: application/json&#39; \    -H
   * &#39;Content-Type: application/json&#39; \    --compressed \
   * --data-binary &quot;{       &#39;agentContent&#39;: &#39;$(cat &lt;agent
   * zip file&gt; | base64 -w 0)&#39;    }&quot;
   */
  agentContent: string;
  /**
   * The URI to a Google Cloud Storage file containing the agent to import.
   * Note: The URI must start with &quot;gs://&quot;.
   */
  agentUri: string;
}
/**
 * Instructs the speech recognizer how to process the audio content.
 */
export interface Schema$GoogleCloudDialogflowV2beta1InputAudioConfig {
  /**
   * Required. Audio encoding of the audio content to process.
   */
  audioEncoding: string;
  /**
   * Required. The language of the supplied audio. Dialogflow does not do
   * translations. See [Language Support](https://dialogflow.com/docs/languages)
   * for a list of the currently supported language codes. Note that queries in
   * the same session do not necessarily need to specify the same language.
   */
  languageCode: string;
  /**
   * Optional. The collection of phrase hints which are used to boost accuracy
   * of speech recognition. Refer to [Cloud Speech API
   * documentation](/speech/docs/basics#phrase-hints) for more details.
   */
  phraseHints: string[];
  /**
   * Required. Sample rate (in Hertz) of the audio content sent in the query.
   * Refer to [Cloud Speech API documentation](/speech/docs/basics) for more
   * details.
   */
  sampleRateHertz: number;
}
/**
 * Represents an intent. Intents convert a number of user expressions or
 * patterns into an action. An action is an extraction of a user command or
 * sentence semantics.
 */
export interface Schema$GoogleCloudDialogflowV2beta1Intent {
  /**
   * Optional. The name of the action associated with the intent.
   */
  action: string;
  /**
   * Optional. The list of platforms for which the first response will be taken
   * from among the messages assigned to the DEFAULT_PLATFORM.
   */
  defaultResponsePlatforms: string[];
  /**
   * Required. The name of this intent.
   */
  displayName: string;
  /**
   * Optional. The collection of event names that trigger the intent. If the
   * collection of input contexts is not empty, all of the contexts must be
   * present in the active user session for an event to trigger this intent.
   */
  events: string[];
  /**
   * Optional. Collection of information about all followup intents that have
   * name of this intent as a root_name.
   */
  followupIntentInfo:
      Schema$GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo[];
  /**
   * Optional. The list of context names required for this intent to be
   * triggered. Format: `projects/&lt;Project
   * ID&gt;/agent/sessions/-/contexts/&lt;Context ID&gt;`.
   */
  inputContextNames: string[];
  /**
   * Optional. Indicates whether this is a fallback intent.
   */
  isFallback: boolean;
  /**
   * Optional. The collection of rich messages corresponding to the `Response`
   * field in API.AI console.
   */
  messages: Schema$GoogleCloudDialogflowV2beta1IntentMessage[];
  /**
   * Optional. Indicates whether Machine Learning is disabled for the intent.
   * Note: If `ml_disabled` setting is set to true, then this intent is not
   * taken into account during inference in `ML ONLY` match mode. Also,
   * auto-markup in the UI is turned off.
   */
  mlDisabled: boolean;
  /**
   * Optional. Indicates whether Machine Learning is enabled for the intent.
   * Note: If `ml_enabled` setting is set to false, then this intent is not
   * taken into account during inference in `ML ONLY` match mode. Also,
   * auto-markup in the UI is turned off. DEPRECATED! Please use `ml_disabled`
   * field instead. NOTE: If neither `ml_enabled` nor `ml_disabled` field is
   * set, then the default value is determined as follows: - Before April 15th,
   * 2018 the default is:   ml_enabled = false / ml_disabled = true. - After
   * April 15th, 2018 the default is:   ml_enabled = true / ml_disabled = false.
   */
  mlEnabled: boolean;
  /**
   * Required for all methods except `create` (`create` populates the name
   * automatically. The unique identifier of this intent. Format:
   * `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
   */
  name: string;
  /**
   * Optional. The collection of contexts that are activated when the intent is
   * matched. Context messages in this collection should not set the parameters
   * field. Setting the `lifespan_count` to 0 will reset the context when the
   * intent is matched. Format: `projects/&lt;Project
   * ID&gt;/agent/sessions/-/contexts/&lt;Context ID&gt;`.
   */
  outputContexts: Schema$GoogleCloudDialogflowV2beta1Context[];
  /**
   * Optional. The collection of parameters associated with the intent.
   */
  parameters: Schema$GoogleCloudDialogflowV2beta1IntentParameter[];
  /**
   * The unique identifier of the parent intent in the chain of followup
   * intents. It identifies the parent followup intent. Format:
   * `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
   */
  parentFollowupIntentName: string;
  /**
   * Optional. The priority of this intent. Higher numbers represent higher
   * priorities. Zero or negative numbers mean that the intent is disabled.
   */
  priority: number;
  /**
   * Optional. Indicates whether to delete all contexts in the current session
   * when this intent is matched.
   */
  resetContexts: boolean;
  /**
   * The unique identifier of the root intent in the chain of followup intents.
   * It identifies the correct followup intents chain for this intent. Format:
   * `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
   */
  rootFollowupIntentName: string;
  /**
   * Optional. The collection of examples/templates that the agent is trained
   * on.
   */
  trainingPhrases: Schema$GoogleCloudDialogflowV2beta1IntentTrainingPhrase[];
  /**
   * Required. Indicates whether webhooks are enabled for the intent.
   */
  webhookState: string;
}
/**
 * This message is a wrapper around a collection of intents.
 */
export interface Schema$GoogleCloudDialogflowV2beta1IntentBatch {
  /**
   * A collection of intents.
   */
  intents: Schema$GoogleCloudDialogflowV2beta1Intent[];
}
/**
 * Represents a single followup intent in the chain.
 */
export interface Schema$GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo {
  /**
   * The unique identifier of the followup intent. Format: `projects/&lt;Project
   * ID&gt;/agent/intents/&lt;Intent ID&gt;`.
   */
  followupIntentName: string;
  /**
   * The unique identifier of the followup intent parent. Format:
   * `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
   */
  parentFollowupIntentName: string;
}
/**
 * Corresponds to the `Response` field in API.AI console.
 */
export interface Schema$GoogleCloudDialogflowV2beta1IntentMessage {
  /**
   * Displays a basic card for Actions on Google.
   */
  basicCard: Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCard;
  /**
   * Displays a card.
   */
  card: Schema$GoogleCloudDialogflowV2beta1IntentMessageCard;
  /**
   * Displays a carousel card for Actions on Google.
   */
  carouselSelect:
      Schema$GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect;
  /**
   * Displays an image.
   */
  image: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
  /**
   * Displays a link out suggestion chip for Actions on Google.
   */
  linkOutSuggestion:
      Schema$GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion;
  /**
   * Displays a list card for Actions on Google.
   */
  listSelect: Schema$GoogleCloudDialogflowV2beta1IntentMessageListSelect;
  /**
   * Returns a response containing a custom payload.
   */
  payload: any;
  /**
   * Optional. The platform that this message is intended for.
   */
  platform: string;
  /**
   * Displays quick replies.
   */
  quickReplies: Schema$GoogleCloudDialogflowV2beta1IntentMessageQuickReplies;
  /**
   * Returns a voice or text-only response for Actions on Google.
   */
  simpleResponses:
      Schema$GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses;
  /**
   * Displays suggestion chips for Actions on Google.
   */
  suggestions: Schema$GoogleCloudDialogflowV2beta1IntentMessageSuggestions;
  /**
   * Returns a text response.
   */
  text: Schema$GoogleCloudDialogflowV2beta1IntentMessageText;
}
/**
 * The basic card message. Useful for displaying information.
 */
export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCard {
  /**
   * Optional. The collection of card buttons.
   */
  buttons: Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton[];
  /**
   * Required, unless image is present. The body text of the card.
   */
  formattedText: string;
  /**
   * Optional. The image for the card.
   */
  image: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
  /**
   * Optional. The subtitle of the card.
   */
  subtitle: string;
  /**
   * Optional. The title of the card.
   */
  title: string;
}
/**
 * The button object that appears at the bottom of a card.
 */
export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton {
  /**
   * Required. Action to take when a user taps on the button.
   */
  openUriAction:
      Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction;
  /**
   * Required. The title of the button.
   */
  title: string;
}
/**
 * Opens the given URI.
 */
export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction {
  /**
   * Required. The HTTP or HTTPS scheme URI.
   */
  uri: string;
}
/**
 * The card response message.
 */
export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageCard {
  /**
   * Optional. The collection of card buttons.
   */
  buttons: Schema$GoogleCloudDialogflowV2beta1IntentMessageCardButton[];
  /**
   * Optional. The public URI to an image file for the card.
   */
  imageUri: string;
  /**
   * Optional. The subtitle of the card.
   */
  subtitle: string;
  /**
   * Optional. The title of the card.
   */
  title: string;
}
/**
 * Optional. Contains information about a button.
 */
export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageCardButton {
  /**
   * Optional. The text to send back to the Dialogflow API or a URI to open.
   */
  postback: string;
  /**
   * Optional. The text to show on the button.
   */
  text: string;
}
/**
 * The card for presenting a carousel of options to select from.
 */
export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect {
  /**
   * Required. Carousel items.
   */
  items: Schema$GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem[];
}
/**
 * An item in the carousel.
 */
export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem {
  /**
   * Optional. The body text of the card.
   */
  description: string;
  /**
   * Optional. The image to display.
   */
  image: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
  /**
   * Required. Additional info about the option item.
   */
  info: Schema$GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;
  /**
   * Required. Title of the carousel item.
   */
  title: string;
}
/**
 * The image response message.
 */
export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageImage {
  /**
   * Optional. A text description of the image to be used for accessibility,
   * e.g., screen readers.
   */
  accessibilityText: string;
  /**
   * Optional. The public URI to an image file.
   */
  imageUri: string;
}
/**
 * The suggestion chip message that allows the user to jump out to the app or
 * website associated with this agent.
 */
export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion {
  /**
   * Required. The name of the app or site this chip is linking to.
   */
  destinationName: string;
  /**
   * Required. The URI of the app or site to open when the user taps the
   * suggestion chip.
   */
  uri: string;
}
/**
 * The card for presenting a list of options to select from.
 */
export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageListSelect {
  /**
   * Required. List items.
   */
  items: Schema$GoogleCloudDialogflowV2beta1IntentMessageListSelectItem[];
  /**
   * Optional. The overall title of the list.
   */
  title: string;
}
/**
 * An item in the list.
 */
export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageListSelectItem {
  /**
   * Optional. The main text describing the item.
   */
  description: string;
  /**
   * Optional. The image to display.
   */
  image: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
  /**
   * Required. Additional information about this option.
   */
  info: Schema$GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;
  /**
   * Required. The title of the list item.
   */
  title: string;
}
/**
 * The quick replies response message.
 */
export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageQuickReplies {
  /**
   * Optional. The collection of quick replies.
   */
  quickReplies: string[];
  /**
   * Optional. The title of the collection of quick replies.
   */
  title: string;
}
/**
 * Additional info about the select item for when it is triggered in a dialog.
 */
export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo {
  /**
   * Required. A unique key that will be sent back to the agent if this response
   * is given.
   */
  key: string;
  /**
   * Optional. A list of synonyms that can also be used to trigger this item in
   * dialog.
   */
  synonyms: string[];
}
/**
 * The simple response message containing speech or text.
 */
export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse {
  /**
   * Optional. The text to display.
   */
  displayText: string;
  /**
   * One of text_to_speech or ssml must be provided. Structured spoken response
   * to the user in the SSML format. Mutually exclusive with text_to_speech.
   */
  ssml: string;
  /**
   * One of text_to_speech or ssml must be provided. The plain text of the
   * speech output. Mutually exclusive with ssml.
   */
  textToSpeech: string;
}
/**
 * The collection of simple response candidates. This message in
 * `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages`
 * should contain only one `SimpleResponse`.
 */
export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses {
  /**
   * Required. The list of simple responses.
   */
  simpleResponses:
      Schema$GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse[];
}
/**
 * The suggestion chip message that the user can tap to quickly post a reply to
 * the conversation.
 */
export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageSuggestion {
  /**
   * Required. The text shown the in the suggestion chip.
   */
  title: string;
}
/**
 * The collection of suggestions.
 */
export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageSuggestions {
  /**
   * Required. The list of suggested replies.
   */
  suggestions: Schema$GoogleCloudDialogflowV2beta1IntentMessageSuggestion[];
}
/**
 * The text response message.
 */
export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageText {
  /**
   * Optional. The collection of the agent&#39;s responses.
   */
  text: string[];
}
/**
 * Represents intent parameters.
 */
export interface Schema$GoogleCloudDialogflowV2beta1IntentParameter {
  /**
   * Optional. The default value to use when the `value` yields an empty result.
   * Default values can be extracted from contexts by using the following
   * syntax: `#context_name.parameter_name`.
   */
  defaultValue: string;
  /**
   * Required. The name of the parameter.
   */
  displayName: string;
  /**
   * Optional. The name of the entity type, prefixed with `@`, that describes
   * values of the parameter. If the parameter is required, this must be
   * provided.
   */
  entityTypeDisplayName: string;
  /**
   * Optional. Indicates whether the parameter represents a list of values.
   */
  isList: boolean;
  /**
   * Optional. Indicates whether the parameter is required. That is, whether the
   * intent cannot be completed without collecting the parameter value.
   */
  mandatory: boolean;
  /**
   * The unique identifier of this parameter.
   */
  name: string;
  /**
   * Optional. The collection of prompts that the agent can present to the user
   * in order to collect value for the parameter.
   */
  prompts: string[];
  /**
   * Optional. The definition of the parameter value. It can be: - a constant
   * string, - a parameter value defined as `$parameter_name`, - an original
   * parameter value defined as `$parameter_name.original`, - a parameter value
   * from some context defined as   `#context_name.parameter_name`.
   */
  value: string;
}
/**
 * Represents an example or template that the agent is trained on.
 */
export interface Schema$GoogleCloudDialogflowV2beta1IntentTrainingPhrase {
  /**
   * Required. The unique identifier of this training phrase.
   */
  name: string;
  /**
   * Required. The collection of training phrase parts (can be annotated).
   * Fields: `entity_type`, `alias` and `user_defined` should be populated only
   * for the annotated parts of the training phrase.
   */
  parts: Schema$GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart[];
  /**
   * Optional. Indicates how many times this example or template was added to
   * the intent. Each time a developer adds an existing sample by editing an
   * intent or training, this counter is increased.
   */
  timesAddedCount: number;
  /**
   * Required. The type of the training phrase.
   */
  type: string;
}
/**
 * Represents a part of a training phrase.
 */
export interface Schema$GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart {
  /**
   * Optional. The parameter name for the value extracted from the annotated
   * part of the example.
   */
  alias: string;
  /**
   * Optional. The entity type name prefixed with `@`. This field is required
   * for the annotated part of the text and applies only to examples.
   */
  entityType: string;
  /**
   * Required. The text corresponding to the example or template, if there are
   * no annotations. For annotated examples, it is the text for one of the
   * example&#39;s parts.
   */
  text: string;
  /**
   * Optional. Indicates whether the text was manually annotated by the
   * developer.
   */
  userDefined: boolean;
}
/**
 * The response message for Contexts.ListContexts.
 */
export interface Schema$GoogleCloudDialogflowV2beta1ListContextsResponse {
  /**
   * The list of contexts. There will be a maximum number of items returned
   * based on the page_size field in the request.
   */
  contexts: Schema$GoogleCloudDialogflowV2beta1Context[];
  /**
   * Token to retrieve the next page of results, or empty if there are no more
   * results in the list.
   */
  nextPageToken: string;
}
/**
 * The response message for EntityTypes.ListEntityTypes.
 */
export interface Schema$GoogleCloudDialogflowV2beta1ListEntityTypesResponse {
  /**
   * The list of agent entity types. There will be a maximum number of items
   * returned based on the page_size field in the request.
   */
  entityTypes: Schema$GoogleCloudDialogflowV2beta1EntityType[];
  /**
   * Token to retrieve the next page of results, or empty if there are no more
   * results in the list.
   */
  nextPageToken: string;
}
/**
 * The response message for Intents.ListIntents.
 */
export interface Schema$GoogleCloudDialogflowV2beta1ListIntentsResponse {
  /**
   * The list of agent intents. There will be a maximum number of items returned
   * based on the page_size field in the request.
   */
  intents: Schema$GoogleCloudDialogflowV2beta1Intent[];
  /**
   * Token to retrieve the next page of results, or empty if there are no more
   * results in the list.
   */
  nextPageToken: string;
}
/**
 * The response message for SessionEntityTypes.ListSessionEntityTypes.
 */
export interface Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse {
  /**
   * Token to retrieve the next page of results, or empty if there are no more
   * results in the list.
   */
  nextPageToken: string;
  /**
   * The list of session entity types. There will be a maximum number of items
   * returned based on the page_size field in the request.
   */
  sessionEntityTypes: Schema$GoogleCloudDialogflowV2beta1SessionEntityType[];
}
/**
 * Represents the contents of the original request that was passed to the
 * `[Streaming]DetectIntent` call.
 */
export interface Schema$GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest {
  /**
   * Optional. This field is set to the value of `QueryParameters.payload` field
   * passed in the request.
   */
  payload: any;
  /**
   * The source of this request, e.g., `google`, `facebook`, `slack`. It is set
   * by Dialogflow-owned servers. Possible values of this field correspond to
   * Intent.Message.Platform.
   */
  source: string;
}
/**
 * Represents the query input. It can contain either:  1.  An audio config which
 * instructs the speech recognizer how to process the speech audio.  2.  A
 * conversational query in the form of text,.  3.  An event that specifies which
 * intent to trigger.
 */
export interface Schema$GoogleCloudDialogflowV2beta1QueryInput {
  /**
   * Instructs the speech recognizer how to process the speech audio.
   */
  audioConfig: Schema$GoogleCloudDialogflowV2beta1InputAudioConfig;
  /**
   * The event to be processed.
   */
  event: Schema$GoogleCloudDialogflowV2beta1EventInput;
  /**
   * The natural language text to be processed.
   */
  text: Schema$GoogleCloudDialogflowV2beta1TextInput;
}
/**
 * Represents the parameters of the conversational query.
 */
export interface Schema$GoogleCloudDialogflowV2beta1QueryParameters {
  /**
   * Optional. The collection of contexts to be activated before this query is
   * executed.
   */
  contexts: Schema$GoogleCloudDialogflowV2beta1Context[];
  /**
   * Optional. The geo location of this conversational query.
   */
  geoLocation: Schema$GoogleTypeLatLng;
  /**
   * Optional. This field can be used to pass custom data into the webhook
   * associated with the agent. Arbitrary JSON objects are supported.
   */
  payload: any;
  /**
   * Optional. Specifies whether to delete all contexts in the current session
   * before the new ones are activated.
   */
  resetContexts: boolean;
  /**
   * Optional. The collection of session entity types to replace or extend
   * developer entities with for this query only. The entity synonyms apply to
   * all languages.
   */
  sessionEntityTypes: Schema$GoogleCloudDialogflowV2beta1SessionEntityType[];
  /**
   * Optional. The time zone of this conversational query from the [time zone
   * database](https://www.iana.org/time-zones), e.g., America/New_York,
   * Europe/Paris. If not provided, the time zone specified in agent settings is
   * used.
   */
  timeZone: string;
}
/**
 * Represents the result of conversational query or event processing.
 */
export interface Schema$GoogleCloudDialogflowV2beta1QueryResult {
  /**
   * The action name from the matched intent.
   */
  action: string;
  /**
   * This field is set to: - `false` if the matched intent has required
   * parameters and not all of    the required parameter values have been
   * collected. - `true` if all required parameter values have been collected,
   * or if the    matched intent doesn&#39;t contain any required parameters.
   */
  allRequiredParamsPresent: boolean;
  /**
   * The free-form diagnostic info. For example, this field could contain
   * webhook call latency.
   */
  diagnosticInfo: any;
  /**
   * The collection of rich messages to present to the user.
   */
  fulfillmentMessages: Schema$GoogleCloudDialogflowV2beta1IntentMessage[];
  /**
   * The text to be pronounced to the user or shown on the screen.
   */
  fulfillmentText: string;
  /**
   * The intent that matched the conversational query. Some, not all fields are
   * filled in this message, including but not limited to: `name`,
   * `display_name` and `webhook_state`.
   */
  intent: Schema$GoogleCloudDialogflowV2beta1Intent;
  /**
   * The intent detection confidence. Values range from 0.0 (completely
   * uncertain) to 1.0 (completely certain).
   */
  intentDetectionConfidence: number;
  /**
   * The language that was triggered during intent detection. See [Language
   * Support](https://dialogflow.com/docs/reference/language) for a list of the
   * currently supported language codes.
   */
  languageCode: string;
  /**
   * The collection of output contexts. If applicable,
   * `output_contexts.parameters` contains entries with name `&lt;parameter
   * name&gt;.original` containing the original parameter values before the
   * query.
   */
  outputContexts: Schema$GoogleCloudDialogflowV2beta1Context[];
  /**
   * The collection of extracted parameters.
   */
  parameters: any;
  /**
   * The original conversational query text: - If natural language text was
   * provided as input, `query_text` contains   a copy of the input. - If
   * natural language speech audio was provided as input, `query_text`
   * contains the speech recognition result. If speech recognizer produced
   * multiple alternatives, a particular one is picked. - If an event was
   * provided as input, `query_text` is not set.
   */
  queryText: string;
  /**
   * The Speech recognition confidence between 0.0 and 1.0. A higher number
   * indicates an estimated greater likelihood that the recognized words are
   * correct. The default of 0.0 is a sentinel value indicating that confidence
   * was not set.  You should not rely on this field as it isn&#39;t guaranteed
   * to be accurate, or even set. In particular this field isn&#39;t set in
   * Webhook calls and for StreamingDetectIntent since the streaming endpoint
   * has separate confidence estimates per portion of the audio in
   * StreamingRecognitionResult.
   */
  speechRecognitionConfidence: number;
  /**
   * If the query was fulfilled by a webhook call, this field is set to the
   * value of the `payload` field returned in the webhook response.
   */
  webhookPayload: any;
  /**
   * If the query was fulfilled by a webhook call, this field is set to the
   * value of the `source` field returned in the webhook response.
   */
  webhookSource: string;
}
/**
 * The request message for Agents.RestoreAgent.
 */
export interface Schema$GoogleCloudDialogflowV2beta1RestoreAgentRequest {
  /**
   * The agent to restore.  Example for how to restore an agent via the command
   * line:  curl \
   * &#39;https://dialogflow.googleapis.com/v2beta1/projects/&lt;project_name&gt;/agent:restore\
   * -X POST \    -H &#39;Authorization: Bearer &#39;$(gcloud auth
   * print-access-token) \    -H &#39;Accept: application/json&#39; \    -H
   * &#39;Content-Type: application/json&#39; \    --compressed \
   * --data-binary &quot;{        &#39;agentContent&#39;: &#39;$(cat &lt;agent
   * zip file&gt; | base64 -w 0)&#39;    }&quot; \
   */
  agentContent: string;
  /**
   * The URI to a Google Cloud Storage file containing the agent to restore.
   * Note: The URI must start with &quot;gs://&quot;.
   */
  agentUri: string;
}
/**
 * The response message for Agents.SearchAgents.
 */
export interface Schema$GoogleCloudDialogflowV2beta1SearchAgentsResponse {
  /**
   * The list of agents. There will be a maximum number of items returned based
   * on the page_size field in the request.
   */
  agents: Schema$GoogleCloudDialogflowV2beta1Agent[];
  /**
   * Token to retrieve the next page of results, or empty if there are no more
   * results in the list.
   */
  nextPageToken: string;
}
/**
 * Represents a session entity type.  Extends or replaces a developer entity
 * type at the user session level (we refer to the entity types defined at the
 * agent level as &quot;developer entity types&quot;).  Note: session entity
 * types apply to all queries, regardless of the language.
 */
export interface Schema$GoogleCloudDialogflowV2beta1SessionEntityType {
  /**
   * Required. The collection of entities associated with this session entity
   * type.
   */
  entities: Schema$GoogleCloudDialogflowV2beta1EntityTypeEntity[];
  /**
   * Required. Indicates whether the additional data should override or
   * supplement the developer entity type definition.
   */
  entityOverrideMode: string;
  /**
   * Required. The unique identifier of this session entity type. Format:
   * `projects/&lt;Project ID&gt;/agent/sessions/&lt;Session
   * ID&gt;/entityTypes/&lt;Entity Type Display Name&gt;`, or
   * `projects/&lt;Project ID&gt;/agent/runtimes/&lt;Runtime
   * ID&gt;sessions/&lt;Session ID&gt;/entityTypes/&lt;Entity Type Display
   * Name&gt;`. Note: Runtimes are under construction and will be available
   * soon. If &lt;Runtime ID&gt; is not specified, we assume default
   * &#39;sandbox&#39; runtime.
   */
  name: string;
}
/**
 * Represents the natural language text to be processed.
 */
export interface Schema$GoogleCloudDialogflowV2beta1TextInput {
  /**
   * Required. The language of this conversational query. See [Language
   * Support](https://dialogflow.com/docs/languages) for a list of the currently
   * supported language codes. Note that queries in the same session do not
   * necessarily need to specify the same language.
   */
  languageCode: string;
  /**
   * Required. The UTF-8 encoded natural language text to be processed. Text
   * length must not exceed 256 bytes.
   */
  text: string;
}
/**
 * The request message for Agents.TrainAgent.
 */
export interface Schema$GoogleCloudDialogflowV2beta1TrainAgentRequest {}
/**
 * The request message for a webhook call.
 */
export interface Schema$GoogleCloudDialogflowV2beta1WebhookRequest {
  /**
   * Optional. The contents of the original request that was passed to
   * `[Streaming]DetectIntent` call.
   */
  originalDetectIntentRequest:
      Schema$GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest;
  /**
   * The result of the conversational query or event processing. Contains the
   * same value as `[Streaming]DetectIntentResponse.query_result`.
   */
  queryResult: Schema$GoogleCloudDialogflowV2beta1QueryResult;
  /**
   * The unique identifier of the response. Contains the same value as
   * `[Streaming]DetectIntentResponse.response_id`.
   */
  responseId: string;
  /**
   * The unique identifier of detectIntent request session. Can be used to
   * identify end-user inside webhook implementation. Format:
   * `projects/&lt;Project ID&gt;/agent/sessions/&lt;Session ID&gt;`.
   */
  session: string;
}
/**
 * The response message for a webhook call.
 */
export interface Schema$GoogleCloudDialogflowV2beta1WebhookResponse {
  /**
   * Optional. Makes the platform immediately invoke another `DetectIntent` call
   * internally with the specified event as input.
   */
  followupEventInput: Schema$GoogleCloudDialogflowV2beta1EventInput;
  /**
   * Optional. The collection of rich messages to present to the user. This
   * value is passed directly to `QueryResult.fulfillment_messages`.
   */
  fulfillmentMessages: Schema$GoogleCloudDialogflowV2beta1IntentMessage[];
  /**
   * Optional. The text to be shown on the screen. This value is passed directly
   * to `QueryResult.fulfillment_text`.
   */
  fulfillmentText: string;
  /**
   * Optional. The collection of output contexts. This value is passed directly
   * to `QueryResult.output_contexts`.
   */
  outputContexts: Schema$GoogleCloudDialogflowV2beta1Context[];
  /**
   * Optional. This value is passed directly to `QueryResult.webhook_payload`.
   */
  payload: any;
  /**
   * Optional. This value is passed directly to `QueryResult.webhook_source`.
   */
  source: string;
}
/**
 * Represents a context.
 */
export interface Schema$GoogleCloudDialogflowV2Context {
  /**
   * Optional. The number of conversational query requests after which the
   * context expires. If set to `0` (the default) the context expires
   * immediately. Contexts expire automatically after 10 minutes even if there
   * are no matching queries.
   */
  lifespanCount: number;
  /**
   * Required. The unique identifier of the context. Format:
   * `projects/&lt;Project ID&gt;/agent/sessions/&lt;Session
   * ID&gt;/contexts/&lt;Context ID&gt;`, or `projects/&lt;Project
   * ID&gt;/agent/runtimes/&lt;Runtime ID&gt;/sessions/&lt;Session
   * ID&gt;/contexts/&lt;Context ID&gt;`. Note: Runtimes are under construction
   * and will be available soon. The Context ID is always converted to
   * lowercase. If &lt;Runtime ID&gt; is not specified, we assume default
   * &#39;sandbox&#39; runtime.
   */
  name: string;
  /**
   * Optional. The collection of parameters associated with this context. Refer
   * to [this doc](https://dialogflow.com/docs/actions-and-parameters) for
   * syntax.
   */
  parameters: any;
}
/**
 * Represents an entity type. Entity types serve as a tool for extracting
 * parameter values from natural language queries.
 */
export interface Schema$GoogleCloudDialogflowV2EntityType {
  /**
   * Optional. Indicates whether the entity type can be automatically expanded.
   */
  autoExpansionMode: string;
  /**
   * Required. The name of the entity.
   */
  displayName: string;
  /**
   * Optional. The collection of entities associated with the entity type.
   */
  entities: Schema$GoogleCloudDialogflowV2EntityTypeEntity[];
  /**
   * Required. Indicates the kind of entity type.
   */
  kind: string;
  /**
   * Required for all methods except `create` (`create` populates the name
   * automatically. The unique identifier of the entity type. Format:
   * `projects/&lt;Project ID&gt;/agent/entityTypes/&lt;Entity Type ID&gt;`.
   */
  name: string;
}
/**
 * Optional. Represents an entity.
 */
export interface Schema$GoogleCloudDialogflowV2EntityTypeEntity {
  /**
   * Required. A collection of synonyms. For `KIND_LIST` entity types this must
   * contain exactly one synonym equal to `value`.
   */
  synonyms: string[];
  /**
   * Required. For `KIND_MAP` entity types:   A canonical name to be used in
   * place of synonyms. For `KIND_LIST` entity types:   A string that can
   * contain references to other entity types (with or   without aliases).
   */
  value: string;
}
/**
 * Events allow for matching intents by event name instead of the natural
 * language input. For instance, input `&lt;event: { name: “welcome_event”,
 * parameters: { name: “Sam” } }&gt;` can trigger a personalized welcome
 * response. The parameter `name` may be used by the agent in the response:
 * `“Hello #welcome_event.name! What can I do for you today?”`.
 */
export interface Schema$GoogleCloudDialogflowV2EventInput {
  /**
   * Required. The language of this query. See [Language
   * Support](https://dialogflow.com/docs/languages) for a list of the currently
   * supported language codes. Note that queries in the same session do not
   * necessarily need to specify the same language.
   */
  languageCode: string;
  /**
   * Required. The unique identifier of the event.
   */
  name: string;
  /**
   * Optional. The collection of parameters associated with the event.
   */
  parameters: any;
}
/**
 * The response message for Agents.ExportAgent.
 */
export interface Schema$GoogleCloudDialogflowV2ExportAgentResponse {
  /**
   * The exported agent.  Example for how to export an agent to a zip file via a
   * command line:  curl \
   * &#39;https://dialogflow.googleapis.com/v2/projects/&lt;project_name&gt;/agent:export&#39;\
   * -X POST \   -H &#39;Authorization: Bearer &#39;$(gcloud auth
   * print-access-token) \   -H &#39;Accept: application/json&#39; \   -H
   * &#39;Content-Type: application/json&#39; \   --compressed \   --data-binary
   * &#39;{}&#39; \ | grep agentContent | sed -e
   * &#39;s/.*&quot;agentContent&quot;: &quot;\([^&quot;]*\)&quot;.x/\1/&#39; \
   * | base64 --decode &gt; &lt;agent zip file&gt;
   */
  agentContent: string;
  /**
   * The URI to a file containing the exported agent. This field is populated
   * only if `agent_uri` is specified in `ExportAgentRequest`.
   */
  agentUri: string;
}
/**
 * Represents an intent. Intents convert a number of user expressions or
 * patterns into an action. An action is an extraction of a user command or
 * sentence semantics.
 */
export interface Schema$GoogleCloudDialogflowV2Intent {
  /**
   * Optional. The name of the action associated with the intent.
   */
  action: string;
  /**
   * Optional. The list of platforms for which the first response will be taken
   * from among the messages assigned to the DEFAULT_PLATFORM.
   */
  defaultResponsePlatforms: string[];
  /**
   * Required. The name of this intent.
   */
  displayName: string;
  /**
   * Optional. The collection of event names that trigger the intent. If the
   * collection of input contexts is not empty, all of the contexts must be
   * present in the active user session for an event to trigger this intent.
   */
  events: string[];
  /**
   * Optional. Collection of information about all followup intents that have
   * name of this intent as a root_name.
   */
  followupIntentInfo: Schema$GoogleCloudDialogflowV2IntentFollowupIntentInfo[];
  /**
   * Optional. The list of context names required for this intent to be
   * triggered. Format: `projects/&lt;Project
   * ID&gt;/agent/sessions/-/contexts/&lt;Context ID&gt;`.
   */
  inputContextNames: string[];
  /**
   * Optional. Indicates whether this is a fallback intent.
   */
  isFallback: boolean;
  /**
   * Optional. The collection of rich messages corresponding to the `Response`
   * field in API.AI console.
   */
  messages: Schema$GoogleCloudDialogflowV2IntentMessage[];
  /**
   * Optional. Indicates whether Machine Learning is disabled for the intent.
   * Note: If `ml_diabled` setting is set to true, then this intent is not taken
   * into account during inference in `ML ONLY` match mode. Also, auto-markup in
   * the UI is turned off.
   */
  mlDisabled: boolean;
  /**
   * Required for all methods except `create` (`create` populates the name
   * automatically. The unique identifier of this intent. Format:
   * `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
   */
  name: string;
  /**
   * Optional. The collection of contexts that are activated when the intent is
   * matched. Context messages in this collection should not set the parameters
   * field. Setting the `lifespan_count` to 0 will reset the context when the
   * intent is matched. Format: `projects/&lt;Project
   * ID&gt;/agent/sessions/-/contexts/&lt;Context ID&gt;`.
   */
  outputContexts: Schema$GoogleCloudDialogflowV2Context[];
  /**
   * Optional. The collection of parameters associated with the intent.
   */
  parameters: Schema$GoogleCloudDialogflowV2IntentParameter[];
  /**
   * The unique identifier of the parent intent in the chain of followup
   * intents. It identifies the parent followup intent. Format:
   * `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
   */
  parentFollowupIntentName: string;
  /**
   * Optional. The priority of this intent. Higher numbers represent higher
   * priorities. Zero or negative numbers mean that the intent is disabled.
   */
  priority: number;
  /**
   * Optional. Indicates whether to delete all contexts in the current session
   * when this intent is matched.
   */
  resetContexts: boolean;
  /**
   * The unique identifier of the root intent in the chain of followup intents.
   * It identifies the correct followup intents chain for this intent. Format:
   * `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
   */
  rootFollowupIntentName: string;
  /**
   * Optional. The collection of examples/templates that the agent is trained
   * on.
   */
  trainingPhrases: Schema$GoogleCloudDialogflowV2IntentTrainingPhrase[];
  /**
   * Required. Indicates whether webhooks are enabled for the intent.
   */
  webhookState: string;
}
/**
 * Represents a single followup intent in the chain.
 */
export interface Schema$GoogleCloudDialogflowV2IntentFollowupIntentInfo {
  /**
   * The unique identifier of the followup intent. Format: `projects/&lt;Project
   * ID&gt;/agent/intents/&lt;Intent ID&gt;`.
   */
  followupIntentName: string;
  /**
   * The unique identifier of the followup intent parent. Format:
   * `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
   */
  parentFollowupIntentName: string;
}
/**
 * Corresponds to the `Response` field in API.AI console.
 */
export interface Schema$GoogleCloudDialogflowV2IntentMessage {
  /**
   * The basic card response for Actions on Google.
   */
  basicCard: Schema$GoogleCloudDialogflowV2IntentMessageBasicCard;
  /**
   * The card response.
   */
  card: Schema$GoogleCloudDialogflowV2IntentMessageCard;
  /**
   * The carousel card response for Actions on Google.
   */
  carouselSelect: Schema$GoogleCloudDialogflowV2IntentMessageCarouselSelect;
  /**
   * The image response.
   */
  image: Schema$GoogleCloudDialogflowV2IntentMessageImage;
  /**
   * The link out suggestion chip for Actions on Google.
   */
  linkOutSuggestion:
      Schema$GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion;
  /**
   * The list card response for Actions on Google.
   */
  listSelect: Schema$GoogleCloudDialogflowV2IntentMessageListSelect;
  /**
   * The response containing a custom payload.
   */
  payload: any;
  /**
   * Optional. The platform that this message is intended for.
   */
  platform: string;
  /**
   * The quick replies response.
   */
  quickReplies: Schema$GoogleCloudDialogflowV2IntentMessageQuickReplies;
  /**
   * The voice and text-only responses for Actions on Google.
   */
  simpleResponses: Schema$GoogleCloudDialogflowV2IntentMessageSimpleResponses;
  /**
   * The suggestion chips for Actions on Google.
   */
  suggestions: Schema$GoogleCloudDialogflowV2IntentMessageSuggestions;
  /**
   * The text response.
   */
  text: Schema$GoogleCloudDialogflowV2IntentMessageText;
}
/**
 * The basic card message. Useful for displaying information.
 */
export interface Schema$GoogleCloudDialogflowV2IntentMessageBasicCard {
  /**
   * Optional. The collection of card buttons.
   */
  buttons: Schema$GoogleCloudDialogflowV2IntentMessageBasicCardButton[];
  /**
   * Required, unless image is present. The body text of the card.
   */
  formattedText: string;
  /**
   * Optional. The image for the card.
   */
  image: Schema$GoogleCloudDialogflowV2IntentMessageImage;
  /**
   * Optional. The subtitle of the card.
   */
  subtitle: string;
  /**
   * Optional. The title of the card.
   */
  title: string;
}
/**
 * The button object that appears at the bottom of a card.
 */
export interface Schema$GoogleCloudDialogflowV2IntentMessageBasicCardButton {
  /**
   * Required. Action to take when a user taps on the button.
   */
  openUriAction:
      Schema$GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction;
  /**
   * Required. The title of the button.
   */
  title: string;
}
/**
 * Opens the given URI.
 */
export interface Schema$GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction {
  /**
   * Required. The HTTP or HTTPS scheme URI.
   */
  uri: string;
}
/**
 * The card response message.
 */
export interface Schema$GoogleCloudDialogflowV2IntentMessageCard {
  /**
   * Optional. The collection of card buttons.
   */
  buttons: Schema$GoogleCloudDialogflowV2IntentMessageCardButton[];
  /**
   * Optional. The public URI to an image file for the card.
   */
  imageUri: string;
  /**
   * Optional. The subtitle of the card.
   */
  subtitle: string;
  /**
   * Optional. The title of the card.
   */
  title: string;
}
/**
 * Optional. Contains information about a button.
 */
export interface Schema$GoogleCloudDialogflowV2IntentMessageCardButton {
  /**
   * Optional. The text to send back to the Dialogflow API or a URI to open.
   */
  postback: string;
  /**
   * Optional. The text to show on the button.
   */
  text: string;
}
/**
 * The card for presenting a carousel of options to select from.
 */
export interface Schema$GoogleCloudDialogflowV2IntentMessageCarouselSelect {
  /**
   * Required. Carousel items.
   */
  items: Schema$GoogleCloudDialogflowV2IntentMessageCarouselSelectItem[];
}
/**
 * An item in the carousel.
 */
export interface Schema$GoogleCloudDialogflowV2IntentMessageCarouselSelectItem {
  /**
   * Optional. The body text of the card.
   */
  description: string;
  /**
   * Optional. The image to display.
   */
  image: Schema$GoogleCloudDialogflowV2IntentMessageImage;
  /**
   * Required. Additional info about the option item.
   */
  info: Schema$GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
  /**
   * Required. Title of the carousel item.
   */
  title: string;
}
/**
 * The image response message.
 */
export interface Schema$GoogleCloudDialogflowV2IntentMessageImage {
  /**
   * Optional. A text description of the image to be used for accessibility,
   * e.g., screen readers.
   */
  accessibilityText: string;
  /**
   * Optional. The public URI to an image file.
   */
  imageUri: string;
}
/**
 * The suggestion chip message that allows the user to jump out to the app or
 * website associated with this agent.
 */
export interface Schema$GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion {
  /**
   * Required. The name of the app or site this chip is linking to.
   */
  destinationName: string;
  /**
   * Required. The URI of the app or site to open when the user taps the
   * suggestion chip.
   */
  uri: string;
}
/**
 * The card for presenting a list of options to select from.
 */
export interface Schema$GoogleCloudDialogflowV2IntentMessageListSelect {
  /**
   * Required. List items.
   */
  items: Schema$GoogleCloudDialogflowV2IntentMessageListSelectItem[];
  /**
   * Optional. The overall title of the list.
   */
  title: string;
}
/**
 * An item in the list.
 */
export interface Schema$GoogleCloudDialogflowV2IntentMessageListSelectItem {
  /**
   * Optional. The main text describing the item.
   */
  description: string;
  /**
   * Optional. The image to display.
   */
  image: Schema$GoogleCloudDialogflowV2IntentMessageImage;
  /**
   * Required. Additional information about this option.
   */
  info: Schema$GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
  /**
   * Required. The title of the list item.
   */
  title: string;
}
/**
 * The quick replies response message.
 */
export interface Schema$GoogleCloudDialogflowV2IntentMessageQuickReplies {
  /**
   * Optional. The collection of quick replies.
   */
  quickReplies: string[];
  /**
   * Optional. The title of the collection of quick replies.
   */
  title: string;
}
/**
 * Additional info about the select item for when it is triggered in a dialog.
 */
export interface Schema$GoogleCloudDialogflowV2IntentMessageSelectItemInfo {
  /**
   * Required. A unique key that will be sent back to the agent if this response
   * is given.
   */
  key: string;
  /**
   * Optional. A list of synonyms that can also be used to trigger this item in
   * dialog.
   */
  synonyms: string[];
}
/**
 * The simple response message containing speech or text.
 */
export interface Schema$GoogleCloudDialogflowV2IntentMessageSimpleResponse {
  /**
   * Optional. The text to display.
   */
  displayText: string;
  /**
   * One of text_to_speech or ssml must be provided. Structured spoken response
   * to the user in the SSML format. Mutually exclusive with text_to_speech.
   */
  ssml: string;
  /**
   * One of text_to_speech or ssml must be provided. The plain text of the
   * speech output. Mutually exclusive with ssml.
   */
  textToSpeech: string;
}
/**
 * The collection of simple response candidates. This message in
 * `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages`
 * should contain only one `SimpleResponse`.
 */
export interface Schema$GoogleCloudDialogflowV2IntentMessageSimpleResponses {
  /**
   * Required. The list of simple responses.
   */
  simpleResponses: Schema$GoogleCloudDialogflowV2IntentMessageSimpleResponse[];
}
/**
 * The suggestion chip message that the user can tap to quickly post a reply to
 * the conversation.
 */
export interface Schema$GoogleCloudDialogflowV2IntentMessageSuggestion {
  /**
   * Required. The text shown the in the suggestion chip.
   */
  title: string;
}
/**
 * The collection of suggestions.
 */
export interface Schema$GoogleCloudDialogflowV2IntentMessageSuggestions {
  /**
   * Required. The list of suggested replies.
   */
  suggestions: Schema$GoogleCloudDialogflowV2IntentMessageSuggestion[];
}
/**
 * The text response message.
 */
export interface Schema$GoogleCloudDialogflowV2IntentMessageText {
  /**
   * Optional. The collection of the agent&#39;s responses.
   */
  text: string[];
}
/**
 * Represents intent parameters.
 */
export interface Schema$GoogleCloudDialogflowV2IntentParameter {
  /**
   * Optional. The default value to use when the `value` yields an empty result.
   * Default values can be extracted from contexts by using the following
   * syntax: `#context_name.parameter_name`.
   */
  defaultValue: string;
  /**
   * Required. The name of the parameter.
   */
  displayName: string;
  /**
   * Optional. The name of the entity type, prefixed with `@`, that describes
   * values of the parameter. If the parameter is required, this must be
   * provided.
   */
  entityTypeDisplayName: string;
  /**
   * Optional. Indicates whether the parameter represents a list of values.
   */
  isList: boolean;
  /**
   * Optional. Indicates whether the parameter is required. That is, whether the
   * intent cannot be completed without collecting the parameter value.
   */
  mandatory: boolean;
  /**
   * The unique identifier of this parameter.
   */
  name: string;
  /**
   * Optional. The collection of prompts that the agent can present to the user
   * in order to collect value for the parameter.
   */
  prompts: string[];
  /**
   * Optional. The definition of the parameter value. It can be: - a constant
   * string, - a parameter value defined as `$parameter_name`, - an original
   * parameter value defined as `$parameter_name.original`, - a parameter value
   * from some context defined as   `#context_name.parameter_name`.
   */
  value: string;
}
/**
 * Represents an example or template that the agent is trained on.
 */
export interface Schema$GoogleCloudDialogflowV2IntentTrainingPhrase {
  /**
   * Required. The unique identifier of this training phrase.
   */
  name: string;
  /**
   * Required. The collection of training phrase parts (can be annotated).
   * Fields: `entity_type`, `alias` and `user_defined` should be populated only
   * for the annotated parts of the training phrase.
   */
  parts: Schema$GoogleCloudDialogflowV2IntentTrainingPhrasePart[];
  /**
   * Optional. Indicates how many times this example or template was added to
   * the intent. Each time a developer adds an existing sample by editing an
   * intent or training, this counter is increased.
   */
  timesAddedCount: number;
  /**
   * Required. The type of the training phrase.
   */
  type: string;
}
/**
 * Represents a part of a training phrase.
 */
export interface Schema$GoogleCloudDialogflowV2IntentTrainingPhrasePart {
  /**
   * Optional. The parameter name for the value extracted from the annotated
   * part of the example.
   */
  alias: string;
  /**
   * Optional. The entity type name prefixed with `@`. This field is required
   * for the annotated part of the text and applies only to examples.
   */
  entityType: string;
  /**
   * Required. The text corresponding to the example or template, if there are
   * no annotations. For annotated examples, it is the text for one of the
   * example&#39;s parts.
   */
  text: string;
  /**
   * Optional. Indicates whether the text was manually annotated by the
   * developer.
   */
  userDefined: boolean;
}
/**
 * Represents the contents of the original request that was passed to the
 * `[Streaming]DetectIntent` call.
 */
export interface Schema$GoogleCloudDialogflowV2OriginalDetectIntentRequest {
  /**
   * Optional. This field is set to the value of `QueryParameters.payload` field
   * passed in the request.
   */
  payload: any;
  /**
   * The source of this request, e.g., `google`, `facebook`, `slack`. It is set
   * by Dialogflow-owned servers. Possible values of this field correspond to
   * Intent.Message.Platform.
   */
  source: string;
}
/**
 * Represents the result of conversational query or event processing.
 */
export interface Schema$GoogleCloudDialogflowV2QueryResult {
  /**
   * The action name from the matched intent.
   */
  action: string;
  /**
   * This field is set to: - `false` if the matched intent has required
   * parameters and not all of    the required parameter values have been
   * collected. - `true` if all required parameter values have been collected,
   * or if the    matched intent doesn&#39;t contain any required parameters.
   */
  allRequiredParamsPresent: boolean;
  /**
   * The free-form diagnostic info. For example, this field could contain
   * webhook call latency.
   */
  diagnosticInfo: any;
  /**
   * The collection of rich messages to present to the user.
   */
  fulfillmentMessages: Schema$GoogleCloudDialogflowV2IntentMessage[];
  /**
   * The text to be pronounced to the user or shown on the screen.
   */
  fulfillmentText: string;
  /**
   * The intent that matched the conversational query. Some, not all fields are
   * filled in this message, including but not limited to: `name`,
   * `display_name` and `webhook_state`.
   */
  intent: Schema$GoogleCloudDialogflowV2Intent;
  /**
   * The intent detection confidence. Values range from 0.0 (completely
   * uncertain) to 1.0 (completely certain).
   */
  intentDetectionConfidence: number;
  /**
   * The language that was triggered during intent detection. See [Language
   * Support](https://dialogflow.com/docs/reference/language) for a list of the
   * currently supported language codes.
   */
  languageCode: string;
  /**
   * The collection of output contexts. If applicable,
   * `output_contexts.parameters` contains entries with name `&lt;parameter
   * name&gt;.original` containing the original parameter values before the
   * query.
   */
  outputContexts: Schema$GoogleCloudDialogflowV2Context[];
  /**
   * The collection of extracted parameters.
   */
  parameters: any;
  /**
   * The original conversational query text: - If natural language text was
   * provided as input, `query_text` contains   a copy of the input. - If
   * natural language speech audio was provided as input, `query_text`
   * contains the speech recognition result. If speech recognizer produced
   * multiple alternatives, a particular one is picked. - If an event was
   * provided as input, `query_text` is not set.
   */
  queryText: string;
  /**
   * The Speech recognition confidence between 0.0 and 1.0. A higher number
   * indicates an estimated greater likelihood that the recognized words are
   * correct. The default of 0.0 is a sentinel value indicating that confidence
   * was not set.  You should not rely on this field as it isn&#39;t guaranteed
   * to be accurate, or even set. In particular this field isn&#39;t set in
   * Webhook calls and for StreamingDetectIntent since the streaming endpoint
   * has separate confidence estimates per portion of the audio in
   * StreamingRecognitionResult.
   */
  speechRecognitionConfidence: number;
  /**
   * If the query was fulfilled by a webhook call, this field is set to the
   * value of the `payload` field returned in the webhook response.
   */
  webhookPayload: any;
  /**
   * If the query was fulfilled by a webhook call, this field is set to the
   * value of the `source` field returned in the webhook response.
   */
  webhookSource: string;
}
/**
 * The request message for a webhook call.
 */
export interface Schema$GoogleCloudDialogflowV2WebhookRequest {
  /**
   * Optional. The contents of the original request that was passed to
   * `[Streaming]DetectIntent` call.
   */
  originalDetectIntentRequest:
      Schema$GoogleCloudDialogflowV2OriginalDetectIntentRequest;
  /**
   * The result of the conversational query or event processing. Contains the
   * same value as `[Streaming]DetectIntentResponse.query_result`.
   */
  queryResult: Schema$GoogleCloudDialogflowV2QueryResult;
  /**
   * The unique identifier of the response. Contains the same value as
   * `[Streaming]DetectIntentResponse.response_id`.
   */
  responseId: string;
  /**
   * The unique identifier of detectIntent request session. Can be used to
   * identify end-user inside webhook implementation. Format:
   * `projects/&lt;Project ID&gt;/agent/sessions/&lt;Session ID&gt;`.
   */
  session: string;
}
/**
 * The response message for a webhook call.
 */
export interface Schema$GoogleCloudDialogflowV2WebhookResponse {
  /**
   * Optional. Makes the platform immediately invoke another `DetectIntent` call
   * internally with the specified event as input.
   */
  followupEventInput: Schema$GoogleCloudDialogflowV2EventInput;
  /**
   * Optional. The collection of rich messages to present to the user. This
   * value is passed directly to `QueryResult.fulfillment_messages`.
   */
  fulfillmentMessages: Schema$GoogleCloudDialogflowV2IntentMessage[];
  /**
   * Optional. The text to be shown on the screen. This value is passed directly
   * to `QueryResult.fulfillment_text`.
   */
  fulfillmentText: string;
  /**
   * Optional. The collection of output contexts. This value is passed directly
   * to `QueryResult.output_contexts`.
   */
  outputContexts: Schema$GoogleCloudDialogflowV2Context[];
  /**
   * Optional. This value is passed directly to `QueryResult.webhook_payload`.
   */
  payload: any;
  /**
   * Optional. This value is passed directly to `QueryResult.webhook_source`.
   */
  source: string;
}
/**
 * This resource represents a long-running operation that is the result of a
 * network API call.
 */
export interface Schema$GoogleLongrunningOperation {
  /**
   * If the value is `false`, it means the operation is still in progress. If
   * `true`, the operation is completed, and either `error` or `response` is
   * available.
   */
  done: boolean;
  /**
   * The error result of the operation in case of failure or cancellation.
   */
  error: Schema$GoogleRpcStatus;
  /**
   * Service-specific metadata associated with the operation.  It typically
   * contains progress information and common metadata such as create time. Some
   * services might not provide such metadata.  Any method that returns a
   * long-running operation should document the metadata type, if any.
   */
  metadata: any;
  /**
   * The server-assigned name, which is only unique within the same service that
   * originally returns it. If you use the default HTTP mapping, the `name`
   * should have the format of `operations/some/unique/name`.
   */
  name: string;
  /**
   * The normal response of the operation in case of success.  If the original
   * method returns no data on success, such as `Delete`, the response is
   * `google.protobuf.Empty`.  If the original method is standard
   * `Get`/`Create`/`Update`, the response should be the resource.  For other
   * methods, the response should have the type `XxxResponse`, where `Xxx` is
   * the original method name.  For example, if the original method name is
   * `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
   */
  response: any;
}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request or
 * the response type of an API method. For instance:      service Foo {
 * rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The
 * JSON representation for `Empty` is empty JSON object `{}`.
 */
export interface Schema$GoogleProtobufEmpty {}
/**
 * The `Status` type defines a logical error model that is suitable for
 * different programming environments, including REST APIs and RPC APIs. It is
 * used by [gRPC](https://github.com/grpc). The error model is designed to be:
 * - Simple to use and understand for most users - Flexible enough to meet
 * unexpected needs  # Overview  The `Status` message contains three pieces of
 * data: error code, error message, and error details. The error code should be
 * an enum value of google.rpc.Code, but it may accept additional error codes if
 * needed.  The error message should be a developer-facing English message that
 * helps developers *understand* and *resolve* the error. If a localized
 * user-facing error message is needed, put the localized message in the error
 * details or localize it in the client. The optional error details may contain
 * arbitrary information about the error. There is a predefined set of error
 * detail types in the package `google.rpc` that can be used for common error
 * conditions.  # Language mapping  The `Status` message is the logical
 * representation of the error model, but it is not necessarily the actual wire
 * format. When the `Status` message is exposed in different client libraries
 * and different wire protocols, it can be mapped differently. For example, it
 * will likely be mapped to some exceptions in Java, but more likely mapped to
 * some error codes in C.  # Other uses  The error model and the `Status`
 * message can be used in a variety of environments, either with or without
 * APIs, to provide a consistent developer experience across different
 * environments.  Example uses of this error model include:  - Partial errors.
 * If a service needs to return partial errors to the client,     it may embed
 * the `Status` in the normal response to indicate the partial     errors.  -
 * Workflow errors. A typical workflow has multiple steps. Each step may
 * have a `Status` message for error reporting.  - Batch operations. If a client
 * uses batch request and batch response, the     `Status` message should be
 * used directly inside batch response, one for     each error sub-response.  -
 * Asynchronous operations. If an API call embeds asynchronous operation
 * results in its response, the status of those operations should be
 * represented directly using the `Status` message.  - Logging. If some API
 * errors are stored in logs, the message `Status` could     be used directly
 * after any stripping needed for security/privacy reasons.
 */
export interface Schema$GoogleRpcStatus {
  /**
   * The status code, which should be an enum value of google.rpc.Code.
   */
  code: number;
  /**
   * A list of messages that carry the error details.  There is a common set of
   * message types for APIs to use.
   */
  details: any[];
  /**
   * A developer-facing error message, which should be in English. Any
   * user-facing error message should be localized and sent in the
   * google.rpc.Status.details field, or localized by the client.
   */
  message: string;
}
/**
 * An object representing a latitude/longitude pair. This is expressed as a pair
 * of doubles representing degrees latitude and degrees longitude. Unless
 * specified otherwise, this must conform to the &lt;a
 * href=&quot;http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf&quot;&gt;WGS84
 * standard&lt;/a&gt;. Values must be within normalized ranges.
 */
export interface Schema$GoogleTypeLatLng {
  /**
   * The latitude in degrees. It must be in the range [-90.0, +90.0].
   */
  latitude: number;
  /**
   * The longitude in degrees. It must be in the range [-180.0, +180.0].
   */
  longitude: number;
}

export class Resource$Projects {
  root: Dialogflow;
  agent: Resource$Projects$Agent;
  operations: Resource$Projects$Operations;
  constructor(root: Dialogflow) {
    this.root = root;
    this.agent = new Resource$Projects$Agent(root);
    this.operations = new Resource$Projects$Operations(root);
  }

  /**
   * dialogflow.projects.getAgent
   * @desc Retrieves the specified agent.
   * @alias dialogflow.projects.getAgent
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. The project that the agent to fetch is associated with. Format: `projects/<Project ID>`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getAgent =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Agent>,
       callback?:
           BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Agent>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/agent')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Agent>(
            parameters, callback!);
      };
}
export class Resource$Projects$Agent {
  root: Dialogflow;
  entityTypes: Resource$Projects$Agent$Entitytypes;
  intents: Resource$Projects$Agent$Intents;
  runtimes: Resource$Projects$Agent$Runtimes;
  sessions: Resource$Projects$Agent$Sessions;
  constructor(root: Dialogflow) {
    this.root = root;
    this.entityTypes = new Resource$Projects$Agent$Entitytypes(root);
    this.intents = new Resource$Projects$Agent$Intents(root);
    this.runtimes = new Resource$Projects$Agent$Runtimes(root);
    this.sessions = new Resource$Projects$Agent$Sessions(root);
  }

  /**
   * dialogflow.projects.agent.export
   * @desc Exports the specified agent to a ZIP file.   Operation <response:
   * ExportAgentResponse,            metadata: google.protobuf.Struct>
   * @alias dialogflow.projects.agent.export
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. The project that the agent to export is associated with. Format: `projects/<Project ID>`.
   * @param {().GoogleCloudDialogflowV2beta1ExportAgentRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  export =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GoogleLongrunningOperation>,
       callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/agent:export')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.import
   * @desc Imports the specified agent from a ZIP file.  Uploads new intents and
   * entity types without deleting the existing ones. Intents and entity types
   * with the same name are replaced with the new versions from
   * ImportAgentRequest.   Operation <response: google.protobuf.Empty,
   * metadata: google.protobuf.Struct>
   * @alias dialogflow.projects.agent.import
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. The project that the agent to import is associated with. Format: `projects/<Project ID>`.
   * @param {().GoogleCloudDialogflowV2beta1ImportAgentRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
import = (params: any, options: MethodOptions|BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>) => {if(typeof options === 'function') {
    callback = options;
    options = {};
  } options = options || {}; const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/'; const parameters = {options: Object.assign({url: (rootUrl + '/v2beta1/{parent}/agent:import').replace(/([^:]\/)\/+/g, '$1'), method: 'POST'}, options), params, requiredParams: ['parent'], pathParams: ['parent'], context: this.root}; createAPIRequest<Schema$GoogleLongrunningOperation>(parameters, callback!);};


  /**
   * dialogflow.projects.agent.restore
   * @desc Restores the specified agent from a ZIP file.  Replaces the current
   * agent version with a new one. All the intents and entity types in the older
   * version are deleted.   Operation <response: google.protobuf.Empty,
   * metadata: google.protobuf.Struct>
   * @alias dialogflow.projects.agent.restore
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. The project that the agent to restore is associated with. Format: `projects/<Project ID>`.
   * @param {().GoogleCloudDialogflowV2beta1RestoreAgentRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  restore =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GoogleLongrunningOperation>,
       callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/agent:restore')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.search
   * @desc Returns the list of agents.  Since there is at most one
   * conversational agent per project, this method is useful primarily for
   * listing all agents across projects the caller has access to. One can
   * achieve that with a wildcard project collection id "-". Refer to [List
   * Sub-Collections](https://cloud.google.com/apis/design/design_patterns#list_sub-collections).
   * @alias dialogflow.projects.agent.search
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
   * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
   * @param {string} params.parent Required. The project to list agents from. Format: `projects/<Project ID or '-'>`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  search =
      (params: any,
       options: MethodOptions|BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1SearchAgentsResponse>,
       callback?: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1SearchAgentsResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/agent:search')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1SearchAgentsResponse>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.train
   * @desc Trains the specified agent.   Operation <response:
   * google.protobuf.Empty,            metadata: google.protobuf.Struct>
   * @alias dialogflow.projects.agent.train
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. The project that the agent to train is associated with. Format: `projects/<Project ID>`.
   * @param {().GoogleCloudDialogflowV2beta1TrainAgentRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  train =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GoogleLongrunningOperation>,
       callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/agent:train')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback!);
      };
}
export class Resource$Projects$Agent$Entitytypes {
  root: Dialogflow;
  entities: Resource$Projects$Agent$Entitytypes$Entities;
  constructor(root: Dialogflow) {
    this.root = root;
    this.entities = new Resource$Projects$Agent$Entitytypes$Entities(root);
  }

  /**
   * dialogflow.projects.agent.entityTypes.batchDelete
   * @desc Deletes entity types in the specified agent.  Operation <response:
   * google.protobuf.Empty,            metadata: google.protobuf.Struct>
   * @alias dialogflow.projects.agent.entityTypes.batchDelete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. The name of the agent to delete all entities types for. Format: `projects/<Project ID>/agent`.
   * @param {().GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  batchDelete =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GoogleLongrunningOperation>,
       callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/entityTypes:batchDelete')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.entityTypes.batchUpdate
   * @desc Updates/Creates multiple entity types in the specified agent.
   * Operation <response: BatchUpdateEntityTypesResponse,            metadata:
   * google.protobuf.Struct>
   * @alias dialogflow.projects.agent.entityTypes.batchUpdate
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. The name of the agent to update or create entity types in. Format: `projects/<Project ID>/agent`.
   * @param {().GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  batchUpdate =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GoogleLongrunningOperation>,
       callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/entityTypes:batchUpdate')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.entityTypes.create
   * @desc Creates an entity type in the specified agent.
   * @alias dialogflow.projects.agent.entityTypes.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.languageCode Optional. The language of entity synonyms defined in `entity_type`. If not specified, the agent's default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent, before they can be used.
   * @param {string} params.parent Required. The agent to create a entity type for. Format: `projects/<Project ID>/agent`.
   * @param {().GoogleCloudDialogflowV2beta1EntityType} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1EntityType>,
       callback?: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1EntityType>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/entityTypes')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1EntityType>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.entityTypes.delete
   * @desc Deletes the specified entity type.
   * @alias dialogflow.projects.agent.entityTypes.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The name of the entity type to delete. Format: `projects/<Project ID>/agent/entityTypes/<EntityType ID>`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
       callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.entityTypes.get
   * @desc Retrieves the specified entity type.
   * @alias dialogflow.projects.agent.entityTypes.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.languageCode Optional. The language to retrieve entity synonyms for. If not specified, the agent's default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent, before they can be used.
   * @param {string} params.name Required. The name of the entity type. Format: `projects/<Project ID>/agent/entityTypes/<EntityType ID>`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1EntityType>,
       callback?: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1EntityType>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1EntityType>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.entityTypes.list
   * @desc Returns the list of all entity types in the specified agent.
   * @alias dialogflow.projects.agent.entityTypes.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.languageCode Optional. The language to list entity synonyms for. If not specified, the agent's default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent, before they can be used.
   * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
   * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
   * @param {string} params.parent Required. The agent to list all entity types from. Format: `projects/<Project ID>/agent`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1ListEntityTypesResponse>,
       callback?: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1ListEntityTypesResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/entityTypes')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListEntityTypesResponse>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.entityTypes.patch
   * @desc Updates the specified entity type.
   * @alias dialogflow.projects.agent.entityTypes.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.languageCode Optional. The language of entity synonyms defined in `entity_type`. If not specified, the agent's default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent, before they can be used.
   * @param {string} params.name Required for all methods except `create` (`create` populates the name automatically. The unique identifier of the entity type. Format: `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
   * @param {string=} params.updateMask Optional. The mask to control which fields get updated.
   * @param {().GoogleCloudDialogflowV2beta1EntityType} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1EntityType>,
       callback?: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1EntityType>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PATCH'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1EntityType>(
            parameters, callback!);
      };
}
export class Resource$Projects$Agent$Entitytypes$Entities {
  root: Dialogflow;
  constructor(root: Dialogflow) {
    this.root = root;
  }

  /**
   * dialogflow.projects.agent.entityTypes.entities.batchCreate
   * @desc Creates multiple new entities in the specified entity type (extends
   * the existing collection of entries).  Operation <response:
   * google.protobuf.Empty>
   * @alias dialogflow.projects.agent.entityTypes.entities.batchCreate
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. The name of the entity type to create entities in. Format: `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
   * @param {().GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  batchCreate =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GoogleLongrunningOperation>,
       callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/entities:batchCreate')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.entityTypes.entities.batchDelete
   * @desc Deletes entities in the specified entity type.  Operation <response:
   * google.protobuf.Empty,            metadata: google.protobuf.Struct>
   * @alias dialogflow.projects.agent.entityTypes.entities.batchDelete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. The name of the entity type to delete entries for. Format: `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
   * @param {().GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  batchDelete =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GoogleLongrunningOperation>,
       callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/entities:batchDelete')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.entityTypes.entities.batchUpdate
   * @desc Updates entities in the specified entity type (replaces the existing
   * collection of entries).  Operation <response: google.protobuf.Empty,
   * metadata: google.protobuf.Struct>
   * @alias dialogflow.projects.agent.entityTypes.entities.batchUpdate
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. The name of the entity type to update the entities in. Format: `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
   * @param {().GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  batchUpdate =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GoogleLongrunningOperation>,
       callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/entities:batchUpdate')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback!);
      };
}


export class Resource$Projects$Agent$Intents {
  root: Dialogflow;
  constructor(root: Dialogflow) {
    this.root = root;
  }

  /**
   * dialogflow.projects.agent.intents.batchDelete
   * @desc Deletes intents in the specified agent.  Operation <response:
   * google.protobuf.Empty>
   * @alias dialogflow.projects.agent.intents.batchDelete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. The name of the agent to delete all entities types for. Format: `projects/<Project ID>/agent`.
   * @param {().GoogleCloudDialogflowV2beta1BatchDeleteIntentsRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  batchDelete =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GoogleLongrunningOperation>,
       callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/intents:batchDelete')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.intents.batchUpdate
   * @desc Updates/Creates multiple intents in the specified agent.  Operation
   * <response: BatchUpdateIntentsResponse>
   * @alias dialogflow.projects.agent.intents.batchUpdate
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. The name of the agent to update or create intents in. Format: `projects/<Project ID>/agent`.
   * @param {().GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  batchUpdate =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GoogleLongrunningOperation>,
       callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/intents:batchUpdate')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.intents.create
   * @desc Creates an intent in the specified agent.
   * @alias dialogflow.projects.agent.intents.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.intentView Optional. The resource view to apply to the returned intent.
   * @param {string=} params.languageCode Optional. The language of training phrases, parameters and rich messages defined in `intent`. If not specified, the agent's default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent, before they can be used.
   * @param {string} params.parent Required. The agent to create a intent for. Format: `projects/<Project ID>/agent`.
   * @param {().GoogleCloudDialogflowV2beta1Intent} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>,
       callback?:
           BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/intents')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Intent>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.intents.delete
   * @desc Deletes the specified intent.
   * @alias dialogflow.projects.agent.intents.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The name of the intent to delete. Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
       callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.intents.get
   * @desc Retrieves the specified intent.
   * @alias dialogflow.projects.agent.intents.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.intentView Optional. The resource view to apply to the returned intent.
   * @param {string=} params.languageCode Optional. The language to retrieve training phrases, parameters and rich messages for. If not specified, the agent's default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent, before they can be used.
   * @param {string} params.name Required. The name of the intent. Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>,
       callback?:
           BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Intent>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.intents.list
   * @desc Returns the list of all intents in the specified agent.
   * @alias dialogflow.projects.agent.intents.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.intentView Optional. The resource view to apply to the returned intent.
   * @param {string=} params.languageCode Optional. The language to list training phrases, parameters and rich messages for. If not specified, the agent's default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
   * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
   * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
   * @param {string} params.parent Required. The agent to list all intents from. Format: `projects/<Project ID>/agent`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1ListIntentsResponse>,
       callback?: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1ListIntentsResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/intents')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListIntentsResponse>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.intents.patch
   * @desc Updates the specified intent.
   * @alias dialogflow.projects.agent.intents.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.intentView Optional. The resource view to apply to the returned intent.
   * @param {string=} params.languageCode Optional. The language of training phrases, parameters and rich messages defined in `intent`. If not specified, the agent's default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent, before they can be used.
   * @param {string} params.name Required for all methods except `create` (`create` populates the name automatically. The unique identifier of this intent. Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
   * @param {string=} params.updateMask Optional. The mask to control which fields get updated.
   * @param {().GoogleCloudDialogflowV2beta1Intent} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>,
       callback?:
           BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PATCH'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Intent>(
            parameters, callback!);
      };
}

export class Resource$Projects$Agent$Runtimes {
  root: Dialogflow;
  sessions: Resource$Projects$Agent$Runtimes$Sessions;
  constructor(root: Dialogflow) {
    this.root = root;
    this.sessions = new Resource$Projects$Agent$Runtimes$Sessions(root);
  }
}
export class Resource$Projects$Agent$Runtimes$Sessions {
  root: Dialogflow;
  contexts: Resource$Projects$Agent$Runtimes$Sessions$Contexts;
  entityTypes: Resource$Projects$Agent$Runtimes$Sessions$Entitytypes;
  constructor(root: Dialogflow) {
    this.root = root;
    this.contexts =
        new Resource$Projects$Agent$Runtimes$Sessions$Contexts(root);
    this.entityTypes =
        new Resource$Projects$Agent$Runtimes$Sessions$Entitytypes(root);
  }

  /**
   * dialogflow.projects.agent.runtimes.sessions.deleteContexts
   * @desc Deletes all active contexts in the specified session.
   * @alias dialogflow.projects.agent.runtimes.sessions.deleteContexts
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. The name of the session to delete all contexts from. Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/runtimes/<Runtime ID>/sessions/<Session ID>`. Note: Runtimes are under construction and will be available soon. If <Runtime ID> is not specified we assume default 'sandbox' runtime.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  deleteContexts =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
       callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/contexts')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.runtimes.sessions.detectIntent
   * @desc Processes a natural language query and returns structured, actionable
   * data as a result. This method is not idempotent, because it may cause
   * contexts and session entity types to be updated, which in turn might affect
   * results of future queries.
   * @alias dialogflow.projects.agent.runtimes.sessions.detectIntent
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.session Required. The name of the session this query is sent to. Format: `projects/<Project ID>/agent/sessions/<Session ID>`, or `projects/<Project ID>/agent/runtimes/<Runtime ID>/sessions/<Session ID>`. Note: Runtimes are under construction and will be available soon. If <Runtime ID> is not specified, we assume default 'sandbox' runtime. It's up to the API caller to choose an appropriate session ID. It can be a random number or some type of user identifier (preferably hashed). The length of the session ID must not exceed 36 bytes.
   * @param {().GoogleCloudDialogflowV2beta1DetectIntentRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  detectIntent =
      (params: any,
       options: MethodOptions|BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse>,
       callback?: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{session}:detectIntent')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['session'],
          pathParams: ['session'],
          context: this.root
        };
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse>(
            parameters, callback!);
      };
}
export class Resource$Projects$Agent$Runtimes$Sessions$Contexts {
  root: Dialogflow;
  constructor(root: Dialogflow) {
    this.root = root;
  }

  /**
   * dialogflow.projects.agent.runtimes.sessions.contexts.create
   * @desc Creates a context.
   * @alias dialogflow.projects.agent.runtimes.sessions.contexts.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. The session to create a context for. Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/runtimes/<Runtime ID>/sessions/<Session ID>`. Note: Runtimes are under construction and will be available soon. If <Runtime ID> is not specified, we assume default 'sandbox' runtime.
   * @param {().GoogleCloudDialogflowV2beta1Context} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
       callback?: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1Context>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/contexts')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Context>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.runtimes.sessions.contexts.delete
   * @desc Deletes the specified context.
   * @alias dialogflow.projects.agent.runtimes.sessions.contexts.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The name of the context to delete. Format: `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>` or `projects/<Project ID>/agent/runtimes/<Runtime ID>/sessions/<Session ID>/contexts/<Context ID>`. Note: Runtimes are under construction and will be available soon. If <Runtime ID> is not specified, we assume default 'sandbox' runtime.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
       callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.runtimes.sessions.contexts.get
   * @desc Retrieves the specified context.
   * @alias dialogflow.projects.agent.runtimes.sessions.contexts.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The name of the context. Format: `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>` or `projects/<Project ID>/agent/runtimes/<Runtime ID>/sessions/<Session ID>/contexts/<Context ID>`. Note: Runtimes are under construction and will be available soon. If <Runtime ID> is not specified, we assume default 'sandbox' runtime.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
       callback?: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1Context>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Context>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.runtimes.sessions.contexts.list
   * @desc Returns the list of all contexts in the specified session.
   * @alias dialogflow.projects.agent.runtimes.sessions.contexts.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
   * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
   * @param {string} params.parent Required. The session to list all contexts from. Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/runtimes/<Runtime ID>/sessions/<Session ID>`. Note: Runtimes are under construction and will be available soon. If <Runtime ID> is not specified, we assume default 'sandbox' runtime.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>,
       callback?: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/contexts')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.runtimes.sessions.contexts.patch
   * @desc Updates the specified context.
   * @alias dialogflow.projects.agent.runtimes.sessions.contexts.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The unique identifier of the context. Format: `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>`, or `projects/<Project ID>/agent/runtimes/<Runtime ID>/sessions/<Session ID>/contexts/<Context ID>`. Note: Runtimes are under construction and will be available soon. The Context ID is always converted to lowercase. If <Runtime ID> is not specified, we assume default 'sandbox' runtime.
   * @param {string=} params.updateMask Optional. The mask to control which fields get updated.
   * @param {().GoogleCloudDialogflowV2beta1Context} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
       callback?: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1Context>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PATCH'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Context>(
            parameters, callback!);
      };
}

export class Resource$Projects$Agent$Runtimes$Sessions$Entitytypes {
  root: Dialogflow;
  constructor(root: Dialogflow) {
    this.root = root;
  }

  /**
   * dialogflow.projects.agent.runtimes.sessions.entityTypes.create
   * @desc Creates a session entity type.
   * @alias dialogflow.projects.agent.runtimes.sessions.entityTypes.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. The session to create a session entity type for. Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/runtimes/<Runtime ID>/sessions/<Session ID>`. Note: Runtimes are under construction and will be available soon. If <Runtime ID> is not specified, we assume default 'sandbox' runtime.
   * @param {().GoogleCloudDialogflowV2beta1SessionEntityType} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create =
      (params: any,
       options: MethodOptions|BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1SessionEntityType>,
       callback?: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1SessionEntityType>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/entityTypes')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1SessionEntityType>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.runtimes.sessions.entityTypes.delete
   * @desc Deletes the specified session entity type.
   * @alias dialogflow.projects.agent.runtimes.sessions.entityTypes.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The name of the entity type to delete. Format: `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type Display Name>` or `projects/<Project ID>/agent/runtimes/<Runtime ID>/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`. Note: Runtimes are under construction and will be available soon. If <Runtime ID> is not specified, we assume default 'sandbox' runtime.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
       callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.runtimes.sessions.entityTypes.get
   * @desc Retrieves the specified session entity type.
   * @alias dialogflow.projects.agent.runtimes.sessions.entityTypes.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The name of the session entity type. Format: `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type Display Name>` or `projects/<Project ID>/agent/runtimes/<Runtime ID>/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`. Note: Runtimes are under construction and will be available soon. If <Runtime ID> is not specified, we assume default 'sandbox' runtime.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1SessionEntityType>,
       callback?: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1SessionEntityType>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1SessionEntityType>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.runtimes.sessions.entityTypes.list
   * @desc Returns the list of all session entity types in the specified
   * session.
   * @alias dialogflow.projects.agent.runtimes.sessions.entityTypes.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
   * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
   * @param {string} params.parent Required. The session to list all session entity types from. Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/runtimes/<Runtime ID>/sessions/<Session ID>`. Note: Runtimes are under construction and will be available soon. If <Runtime ID> is not specified, we assume default 'sandbox' runtime.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse>,
       callback?: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/entityTypes')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.runtimes.sessions.entityTypes.patch
   * @desc Updates the specified session entity type.
   * @alias dialogflow.projects.agent.runtimes.sessions.entityTypes.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The unique identifier of this session entity type. Format: `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`, or `projects/<Project ID>/agent/runtimes/<Runtime ID>sessions/<Session ID>/entityTypes/<Entity Type Display Name>`. Note: Runtimes are under construction and will be available soon. If <Runtime ID> is not specified, we assume default 'sandbox' runtime.
   * @param {string=} params.updateMask Optional. The mask to control which fields get updated.
   * @param {().GoogleCloudDialogflowV2beta1SessionEntityType} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch =
      (params: any,
       options: MethodOptions|BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1SessionEntityType>,
       callback?: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1SessionEntityType>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PATCH'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1SessionEntityType>(
            parameters, callback!);
      };
}



export class Resource$Projects$Agent$Sessions {
  root: Dialogflow;
  contexts: Resource$Projects$Agent$Sessions$Contexts;
  entityTypes: Resource$Projects$Agent$Sessions$Entitytypes;
  constructor(root: Dialogflow) {
    this.root = root;
    this.contexts = new Resource$Projects$Agent$Sessions$Contexts(root);
    this.entityTypes = new Resource$Projects$Agent$Sessions$Entitytypes(root);
  }

  /**
   * dialogflow.projects.agent.sessions.deleteContexts
   * @desc Deletes all active contexts in the specified session.
   * @alias dialogflow.projects.agent.sessions.deleteContexts
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. The name of the session to delete all contexts from. Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/runtimes/<Runtime ID>/sessions/<Session ID>`. Note: Runtimes are under construction and will be available soon. If <Runtime ID> is not specified we assume default 'sandbox' runtime.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  deleteContexts =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
       callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/contexts')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.sessions.detectIntent
   * @desc Processes a natural language query and returns structured, actionable
   * data as a result. This method is not idempotent, because it may cause
   * contexts and session entity types to be updated, which in turn might affect
   * results of future queries.
   * @alias dialogflow.projects.agent.sessions.detectIntent
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.session Required. The name of the session this query is sent to. Format: `projects/<Project ID>/agent/sessions/<Session ID>`, or `projects/<Project ID>/agent/runtimes/<Runtime ID>/sessions/<Session ID>`. Note: Runtimes are under construction and will be available soon. If <Runtime ID> is not specified, we assume default 'sandbox' runtime. It's up to the API caller to choose an appropriate session ID. It can be a random number or some type of user identifier (preferably hashed). The length of the session ID must not exceed 36 bytes.
   * @param {().GoogleCloudDialogflowV2beta1DetectIntentRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  detectIntent =
      (params: any,
       options: MethodOptions|BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse>,
       callback?: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{session}:detectIntent')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['session'],
          pathParams: ['session'],
          context: this.root
        };
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse>(
            parameters, callback!);
      };
}
export class Resource$Projects$Agent$Sessions$Contexts {
  root: Dialogflow;
  constructor(root: Dialogflow) {
    this.root = root;
  }

  /**
   * dialogflow.projects.agent.sessions.contexts.create
   * @desc Creates a context.
   * @alias dialogflow.projects.agent.sessions.contexts.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. The session to create a context for. Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/runtimes/<Runtime ID>/sessions/<Session ID>`. Note: Runtimes are under construction and will be available soon. If <Runtime ID> is not specified, we assume default 'sandbox' runtime.
   * @param {().GoogleCloudDialogflowV2beta1Context} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
       callback?: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1Context>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/contexts')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Context>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.sessions.contexts.delete
   * @desc Deletes the specified context.
   * @alias dialogflow.projects.agent.sessions.contexts.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The name of the context to delete. Format: `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>` or `projects/<Project ID>/agent/runtimes/<Runtime ID>/sessions/<Session ID>/contexts/<Context ID>`. Note: Runtimes are under construction and will be available soon. If <Runtime ID> is not specified, we assume default 'sandbox' runtime.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
       callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.sessions.contexts.get
   * @desc Retrieves the specified context.
   * @alias dialogflow.projects.agent.sessions.contexts.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The name of the context. Format: `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>` or `projects/<Project ID>/agent/runtimes/<Runtime ID>/sessions/<Session ID>/contexts/<Context ID>`. Note: Runtimes are under construction and will be available soon. If <Runtime ID> is not specified, we assume default 'sandbox' runtime.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
       callback?: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1Context>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Context>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.sessions.contexts.list
   * @desc Returns the list of all contexts in the specified session.
   * @alias dialogflow.projects.agent.sessions.contexts.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
   * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
   * @param {string} params.parent Required. The session to list all contexts from. Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/runtimes/<Runtime ID>/sessions/<Session ID>`. Note: Runtimes are under construction and will be available soon. If <Runtime ID> is not specified, we assume default 'sandbox' runtime.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>,
       callback?: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/contexts')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.sessions.contexts.patch
   * @desc Updates the specified context.
   * @alias dialogflow.projects.agent.sessions.contexts.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The unique identifier of the context. Format: `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>`, or `projects/<Project ID>/agent/runtimes/<Runtime ID>/sessions/<Session ID>/contexts/<Context ID>`. Note: Runtimes are under construction and will be available soon. The Context ID is always converted to lowercase. If <Runtime ID> is not specified, we assume default 'sandbox' runtime.
   * @param {string=} params.updateMask Optional. The mask to control which fields get updated.
   * @param {().GoogleCloudDialogflowV2beta1Context} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
       callback?: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1Context>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PATCH'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Context>(
            parameters, callback!);
      };
}

export class Resource$Projects$Agent$Sessions$Entitytypes {
  root: Dialogflow;
  constructor(root: Dialogflow) {
    this.root = root;
  }

  /**
   * dialogflow.projects.agent.sessions.entityTypes.create
   * @desc Creates a session entity type.
   * @alias dialogflow.projects.agent.sessions.entityTypes.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. The session to create a session entity type for. Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/runtimes/<Runtime ID>/sessions/<Session ID>`. Note: Runtimes are under construction and will be available soon. If <Runtime ID> is not specified, we assume default 'sandbox' runtime.
   * @param {().GoogleCloudDialogflowV2beta1SessionEntityType} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create =
      (params: any,
       options: MethodOptions|BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1SessionEntityType>,
       callback?: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1SessionEntityType>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/entityTypes')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1SessionEntityType>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.sessions.entityTypes.delete
   * @desc Deletes the specified session entity type.
   * @alias dialogflow.projects.agent.sessions.entityTypes.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The name of the entity type to delete. Format: `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type Display Name>` or `projects/<Project ID>/agent/runtimes/<Runtime ID>/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`. Note: Runtimes are under construction and will be available soon. If <Runtime ID> is not specified, we assume default 'sandbox' runtime.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
       callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.sessions.entityTypes.get
   * @desc Retrieves the specified session entity type.
   * @alias dialogflow.projects.agent.sessions.entityTypes.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The name of the session entity type. Format: `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type Display Name>` or `projects/<Project ID>/agent/runtimes/<Runtime ID>/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`. Note: Runtimes are under construction and will be available soon. If <Runtime ID> is not specified, we assume default 'sandbox' runtime.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1SessionEntityType>,
       callback?: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1SessionEntityType>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1SessionEntityType>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.sessions.entityTypes.list
   * @desc Returns the list of all session entity types in the specified
   * session.
   * @alias dialogflow.projects.agent.sessions.entityTypes.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
   * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
   * @param {string} params.parent Required. The session to list all session entity types from. Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/runtimes/<Runtime ID>/sessions/<Session ID>`. Note: Runtimes are under construction and will be available soon. If <Runtime ID> is not specified, we assume default 'sandbox' runtime.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse>,
       callback?: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/entityTypes')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse>(
            parameters, callback!);
      };


  /**
   * dialogflow.projects.agent.sessions.entityTypes.patch
   * @desc Updates the specified session entity type.
   * @alias dialogflow.projects.agent.sessions.entityTypes.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The unique identifier of this session entity type. Format: `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`, or `projects/<Project ID>/agent/runtimes/<Runtime ID>sessions/<Session ID>/entityTypes/<Entity Type Display Name>`. Note: Runtimes are under construction and will be available soon. If <Runtime ID> is not specified, we assume default 'sandbox' runtime.
   * @param {string=} params.updateMask Optional. The mask to control which fields get updated.
   * @param {().GoogleCloudDialogflowV2beta1SessionEntityType} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch =
      (params: any,
       options: MethodOptions|BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1SessionEntityType>,
       callback?: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1SessionEntityType>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PATCH'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1SessionEntityType>(
            parameters, callback!);
      };
}



export class Resource$Projects$Operations {
  root: Dialogflow;
  constructor(root: Dialogflow) {
    this.root = root;
  }

  /**
   * dialogflow.projects.operations.get
   * @desc Gets the latest state of a long-running operation.  Clients can use
   * this method to poll the operation result at intervals as recommended by the
   * API service.
   * @alias dialogflow.projects.operations.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the operation resource.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GoogleLongrunningOperation>,
       callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback!);
      };
}
